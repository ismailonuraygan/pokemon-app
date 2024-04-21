import React from "react";
import classes from "./Fallback.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FallbackComponent() {
  return (
    <div className={classes.errorOutline}>
      <div className={classes.generalErrorOutline}>
        <div className={classes.errorIcon}></div>
        <FontAwesomeIcon icon="exclamation-triangle" color="inherit" />
        <div className={classes.errorText}>SOMETHING WENT WRONG</div>
      </div>
    </div>
  );
}

export default FallbackComponent;
