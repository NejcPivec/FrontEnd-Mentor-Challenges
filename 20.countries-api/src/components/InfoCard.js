import React from "react";

const InfoCard = ({ info, removeInfo }) => {
  return (
    <div className="container">
      <button className="back" onClick={removeInfo}>
        <i className="fas fa-arrow-left"></i>Back
      </button>
      <div className="grid-row">
        <div className="info-left">
          <img src={info.flag} alt={`${info.name}-flag`} />
        </div>
        <div className="info-right">
          <h1>{info.name}</h1>
          <div className="flex-between">
            <ul className="country-info">
              <li>
                <strong>Native Name:</strong> {info.nativeName}
              </li>
              <li>
                <strong>Population:</strong> {info.population}
              </li>
              <li>
                <strong>Region:</strong> {info.region}
              </li>
              <li>
                <strong>Sub Region:</strong> {info.subregion}
              </li>
              <li>
                <strong>Capital:</strong> {info.capital}
              </li>
            </ul>
            <ul className="country-info">
              <li>
                <strong>Top Level Domain:</strong> {info.topLevelDomain[0]}
              </li>
              <li>
                <strong> Currency: </strong> {info.currencies[0].name}
              </li>
              <li>
                <strong>Languages:</strong> {info.languages[0].name}
              </li>
            </ul>
          </div>
          <div className="flex">
            <span>
              <strong>Border Countries:</strong>
            </span>
            <ul className="border">
              {info.borders.map((border, index) => (
                <li className="border-country" key={index}>
                  {border}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
