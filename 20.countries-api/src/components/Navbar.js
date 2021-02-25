import React from "react";

const Navbar = ({ changeTheme }) => {
  return (
    <nav className="">
      <div className="container flex-between">
        <div>
          <h1>Where in the world?</h1>
        </div>
        <div className="toggle" onClick={changeTheme}>
          <p className="mode">
            <i className="far fa-moon"></i> Dark Mode
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
