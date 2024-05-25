import { useState } from "react";
import styles from "../styles/sort.module.css";
import arrow from "./images/arrow.svg";

export function Sort({ order, setOrder, isRotated, setIsRotated }) {
  function sort() {
    setOrder(!order);
    setIsRotated(!isRotated);
  }

  return (
    <div>
      <img
        src={arrow}
        style={{
          transform: isRotated && "rotate(180deg)",
        }}
        className={styles.arrowInButton}
        alt="arrow in button"
      ></img>
      <button type="button" onClick={sort}>
        sort
      </button>
    </div>
  );
}
