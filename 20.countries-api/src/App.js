import React, { useState, useEffect } from "react";
import "./App.css";

import CountryCard from "./components/CountryCard";
import Navbar from "./components/Navbar";
import SearchAndFilter from "./components/SearchAndFilter";
import InfoCard from "./components/InfoCard";

function App() {
  const [countries, setCountries] = useState([]);
  const [countrySearch, setCountrySearch] = useState("");
  const [info, setInfo] = useState([]);

  const getCountries = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = res.json().then((res) => setCountries(res));

    return countries;
  };

  useEffect(() => {
    getCountries();
  }, []);

  const onChange = (e) => {
    setCountrySearch(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (countrySearch.length > 0) {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/name/${countrySearch}`
      );
      res.json().then((res) => setCountries(res));
    } else {
      getCountries();
    }
  };

  const filterRegion = async (e) => {
    if (e.target.value !== "") {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/region/${e.target.value}`
      );

      res.json().then((res) => setCountries(res));
    }
  };

  const changeTheme = () => {
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("nav").classList.toggle("dark");
    if (info.name === undefined) {
      document.querySelector(".card").classList.toggle("dark");
      document.querySelector("input").classList.toggle("dark");
      document.querySelector(".search-icon").classList.toggle("dark");
      document.querySelector(".dropbtn").classList.toggle("dark");
      document.querySelector(".dropdown-content").classList.toggle("dark");
      const dropItems = document.querySelectorAll(
        ".dropdown-content .drop-item"
      );

      dropItems.forEach((dropItem) => dropItem.classList.toggle("dark"));
    } else {
      document.querySelector(".back").classList.toggle("dark");
    }

    /*  */
  };

  const removeInfo = () => {
    setInfo([]);
  };

  info.name === undefined ? console.log("nič") : console.log("ena");

  return (
    <div>
      <Navbar changeTheme={changeTheme} />

      {info.length === 0 ? (
        <>
          <div className="container">
            <SearchAndFilter
              countrySearch={countrySearch}
              onChange={onChange}
              onSubmit={onSubmit}
              filterRegion={filterRegion}
            />
          </div>

          <div className="container grid country-cards">
            {countries.map((country, index) => (
              <CountryCard
                key={index}
                country={country}
                getCountry={() => setInfo(country)}
              />
            ))}
          </div>
        </>
      ) : (
        <InfoCard info={info} removeInfo={removeInfo} />
      )}
    </div>
  );
}

export default App;
