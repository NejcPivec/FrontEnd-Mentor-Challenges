import React from "react";

const CheckBox = ({ checked, ...props }) => {
  return (
    <input
      type="checkbox"
      className={`check-control ${checked ? "checked" : ""}`}
      {...props}
    />
  );
};

export default CheckBox;
