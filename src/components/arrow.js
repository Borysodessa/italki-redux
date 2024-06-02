import arrow from "./images/arrow.svg";
import styles from "../styles/arrow.module.css";
import classNames from "classnames";

export function Arrow({ arrowRotate, buttonName, selectButton }) {
  return (
    <img
      src={arrow}
      className={classNames({
        [styles.rotate]: selectButton === buttonName && arrowRotate,
        [styles.arrowInSortButton]: true,
      })}
      alt="arrow in button"
    ></img>
  );
}
