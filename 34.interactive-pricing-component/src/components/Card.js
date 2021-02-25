import React, { useState } from "react";
import checkIcon from "../images/icon-check.svg";

const Card = () => {
  const [value, setValue] = useState(1);

  const sliderFunction = () => {
    var value1 = ((value - 1) / 29) * 100;
    document.getElementById("card__slider").style.background =
      "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) " +
      value1 +
      "%, hsl(224, 65%, 95%) " +
      value1 +
      "%, hsl(224, 65%, 95%) 100%)";
  };

  return (
    <div className="card">
      <div className="card__title">
        <h6 className="m--4b">100k Pageviews</h6>
        <p className="m--4b title_desktop">
          <span className="slider__value">${value}</span> / month
        </p>
      </div>
      <input
        type="range"
        id="card__slider"
        className="card__slider m--4b"
        min="1"
        max="30"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onInput={sliderFunction}
      />
      <p className="m--4b title_mobile">
        <span className="slider__value">${value}</span> / month
      </p>

      <div className="card__toggle m--4b">
        <span className="card__text m--r">Monthly Billing</span>
        <label className="switch m--r">
          <input type="checkbox" />
          <span className="toggler round"></span>
        </label>
        <span className="card__text m--r">Yearly Billing</span>
        <span className="card_discound hide-desktop">-25%</span>
        <span className="card_discound hide-mobile">25% discount</span>
      </div>

      <div className="card__lower">
        <ul className="m--4b m--4t">
          <li>
            <img src={checkIcon} alt="Checked Icon" />
            <span className="card__text">Unlimited websites</span>
          </li>
          <li>
            <img src={checkIcon} alt="Checked Icon" />
            <span className="card__text">100% data ownership</span>
          </li>
          <li>
            <img src={checkIcon} alt="Checked Icon" />
            <span className="card__text">Email reports</span>
          </li>
        </ul>
        <button className="button">Start my trial</button>
      </div>
    </div>
  );
};

export default Card;
