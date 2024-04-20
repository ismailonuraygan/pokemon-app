import React from "react";
import classes from "./Header.module.scss";

function Header() {
  return (
    <div className={classes.header}>
      <img
        src={require("./pokemon.png")}
        alt="logo"
        width={350}
        height={150}
        className={classes.logo}
      />
    </div>
  );
}

export default Header;
