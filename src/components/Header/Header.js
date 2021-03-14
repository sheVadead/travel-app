import React from "react";
import { Link } from "react-router-dom";

import logo from "./images/logo.svg";
import Search from "../Search/Search";
import LangSelect from "../LangSelect/LangSelect";

import "./Header.scss";

export default function Header(props) {
  return (
    <header className="header">
      <div className="logo header__logo">
        <Link to="/" className="logo__link">
          <img src={logo} alt="Logo TravelApp" className="logo__img" />
        </Link>
      </div>
      <Search
        page={props.page}
        language={props.language}
        countriesInfo={props.countriesInfo}
      />
      <LangSelect
        onLanguageChange={props.onLanguageChange}
        language={props.language}
      />
    </header>
  );
}
