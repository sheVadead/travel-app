import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryService from "../../services/country-service";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FirstScreen from "../FirstScreen/FirstScreen";
import CountriesMenu from "../CountriesMenu/CountriesMenu";
import CountryPage from "../CountryPage/CountryPage";
import NotFound from "../NotFound/NotFound";

import "./App.scss";

export default class App extends Component {
  state = {
    currentCountry: "",
    currentISO: "",
    language: localStorage.getItem("language") || "eng",
    countriesInfo: [],
  };

  componentDidMount() {
    new CountryService()
      .getAllCountries()
      .then((data) => this.setState({ countriesInfo: data }));
  }

  onCountryChange = (country, iso) => {
    this.setState((country) => {
      return { currentCountry: country };
    });
    this.setState({ currentISO: iso });
  };

  onLanguageChange = (lang) => {
    this.setState({ language: lang });
    localStorage.setItem("language", lang);
  };

  render() {
    return (
      <Router>
        <div className="main-wrapper">
          <Switch>
            <Route path="/" exact>
              <Header
                page={"menu"}
                onLanguageChange={this.onLanguageChange}
                language={this.state.language}
                countriesInfo={this.state.countriesInfo}
              />
            </Route>
            <Route path="/:country">
              <Header
                page={"country"}
                onLanguageChange={this.onLanguageChange}
                language={this.state.language}
              />
            </Route>
            <Route
              path="*"
              component={NotFound}
              language={this.state.language}
            />
          </Switch>
          <main className="main">
            <Switch>
              <Route path="/" exact>
                <FirstScreen language={this.state.language} />
                <CountriesMenu
                  onCountryChange={this.onCountryChange}
                  language={this.state.language}
                  countriesInfo={this.state.countriesInfo}
                />
              </Route>
              <Route
                path="/:country"
                render={({ match }) => {
                  const { country } = match.params;
                  return (
                    <CountryPage
                      language={this.state.language}
                      countriesInfo={this.state.countriesInfo}
                      country={country}
                      iso={this.state.currentISO}
                    />
                  );
                }}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}
