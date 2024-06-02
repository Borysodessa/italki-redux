import styles from "../styles/sort.module.css";
import { Arrow } from "./arrow";
import classNames from "classnames";

const buttonNames = [
  "orderByLessons",
  "orderByStudents",
  "orderByRatio",
  "orderByPrice",
];

export function Sort({ change, setChange }) {
  function changeColor(buttonName) {
    if (change.selectButton !== buttonName) {
      setChange({ ...change, selectButton: buttonName, rotate: false });
    } else {
      setChange({ ...change, rotate: true });
    }
  }

  return (
    <div className={styles.sortButtonWrap}>
      {buttonNames.map((buttonName) => (
        <div
          key={buttonName}
          className={styles.sortArrowWrap}
          onClick={() => changeColor(buttonName)}
        >
          <Arrow
            arrowStyles={styles.arrowInSortButton}
            arrowRotate={change.rotate}
            buttonName={buttonName}
            selectButton={change.selectButton}
          />
          <button
            className={classNames({
              [styles.changeColor]: change.selectButton === buttonName,
              [styles.sortButton]: true,
            })}
          >
            {buttonName}
          </button>
        </div>
      ))}
    </div>
  );
}
