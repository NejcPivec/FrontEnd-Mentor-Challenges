import React, { useState } from "react";

import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.querySelector("html").setAttribute("data-theme", "light");
    } else {
      setTheme("dark");
      document.querySelector("html").setAttribute("data-theme", "dark");
    }
  };

  return (
    <header className="header">
      <h1 className="header__title">Todo</h1>
      <button className="header__button" onClick={toggleTheme}>
        {theme === "dark" ? (
          <img src={sun} alt="Light Theme" />
        ) : (
          <img src={moon} alt="Dark Theme" />
        )}
      </button>
    </header>
  );
};

export default Header;
