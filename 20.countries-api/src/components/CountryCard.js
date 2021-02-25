import React from "react";

const CountryCard = ({ country, getCountry }) => {
  return (
    <div className="card" onClick={getCountry}>
      <div className="flex-col">
        <div className="flag">
          <img src={country.flag} alt={`${country.name}-flag`} />
        </div>
        <div className="stats">
          <h2>{country.name}</h2>
          <p>
            <strong>Population:</strong> {country.population}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
