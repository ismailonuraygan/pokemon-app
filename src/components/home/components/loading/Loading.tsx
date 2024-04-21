import React from "react";
import classes from "./Loading.module.scss";

interface IProps {
  text: string;
}

function LoadingDots(props: IProps) {
  const { text } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p style={{ fontWeight: 600 }}>{text}</p>
      <svg height="40" width="40" className={classes.loader}>
        <circle
          className={classes.dot}
          cx="10"
          cy="20"
          r="3"
          style={{ fill: "grey" }}
        />
        <circle
          className={classes.dot}
          cx="20"
          cy="20"
          r="3"
          style={{ fill: "grey" }}
        />
        <circle
          className={classes.dot}
          cx="30"
          cy="20"
          r="3"
          style={{ fill: "grey" }}
        />
      </svg>
    </div>
  );
}

export default LoadingDots;
