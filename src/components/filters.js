import styles from "../styles/filter.module.css";
import { useState } from "react";

export function Filter({
  targetName,
  selectedTarget,
  teachersData,
  buttonName,
  setSelectedTarget,
  criteria,
  selectedByCriterion,
  arrow,
}) {
  const [openButton, setOpenButton] = useState(false);
  const [substr, setSubstr] = useState("");
  const [isRotated, setIsRotated] = useState(false);

  function selectTargetValue(i) {
    if (selectedTarget.includes(i)) {
      setSelectedTarget(selectedTarget.filter((el) => el !== i));
    } else {
      setSelectedTarget([...selectedTarget, ...[i]]);
    }
  }

  function filtersMenuButton() {
    setOpenButton(() => !openButton);
  }

  function enterSubstr(event) {
    setSubstr(() => event.target.value);
  }

  const teachers = teachersData.filter((teacher) =>
    targetName(teacher).toLowerCase().includes(substr.toLocaleLowerCase())
  );

  function arrowCollapse() {
    setIsRotated(!isRotated);
  }
  return (
    <div>
      <button className={styles.filtersMenuButton} onClick={filtersMenuButton}>
        {buttonName}

        <img
          src={arrow}
          style={{
            transform: isRotated && "rotate(180deg)",
          }}
          onClick={() => arrowCollapse()}
          alt=""
        ></img>
      </button>

      <div className={styles.criteriaWrap}>
        <h3 className={styles.criteriaName}>Selected {criteria}</h3>

        <span>{selectedByCriterion}</span>
      </div>

      {openButton && (
        <div className={styles.filtersMenuWrap}>
          <input onChange={(event) => enterSubstr(event)} />

          {teachers.map((item) => {
            return (
              <div key={item} onClick={() => selectTargetValue(item)}>
                {targetName(item)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
