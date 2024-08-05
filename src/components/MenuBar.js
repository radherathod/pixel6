import React from "react";
import { TiThMenu } from "react-icons/ti";

const MenuBar = () => {
  const handleMenuClick = () => {
    console.log("Menu icon clicked");
  };

  return (
    <TiThMenu
      style={{
        height: "20px",
        width: "20px",
        color: "grey",
        cursor: "pointer",
      }}
      onClick={handleMenuClick}
    />
  );
};

export default MenuBar;
