import classes from "../CardDetail.module.scss";
import classNames from "classnames";

function useButtonStatus({ isSaveBtn }: { isSaveBtn: boolean }) {
  const buttonTxt = isSaveBtn ? "Save Card" : "Remove Card";

  const buttonClasses = classNames([
    classes.toggleBtn,
    { [classes.saveBtn]: isSaveBtn, [classes.removeBtn]: !isSaveBtn },
  ]);

  return { buttonTxt, buttonClasses };
}

export default useButtonStatus;
