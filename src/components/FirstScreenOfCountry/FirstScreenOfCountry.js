import React from "react";

import "./FirstScreenOfCountry.scss";

import { langTextFirstScreenOfCountry as langText } from "../../services/langComponents";

export default function FirstScreenOfCountry({
  countryLang,
  capitalLang,
  language,
}) {
  return (
    <section className="first-screen-country">
      <div className="first-screen-country__box">
        <div className="first-screen-country__content">
          <div className="first-screen-country__frame">
            <h1 className="first-screen-country__title">{countryLang}</h1>
            <h2 className="first-screen-country__subtitle">
              {langText.firstH1[language]}
            </h2>
            <p className="first-screen-country__capital">{capitalLang}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
