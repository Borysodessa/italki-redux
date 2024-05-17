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
  buttonLogo,
  flag,
}) {
  console.log(flag);

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
    setIsRotated(!isRotated);
  }

  function enterSubstr(event) {
    setSubstr(() => event.target.value);
  }

  const teachers = teachersData.filter((teacher) =>
    targetName(teacher).toLowerCase().includes(substr.toLocaleLowerCase())
  );

  return (
    <div>
      <div className={styles.menuButtonWrap} onClick={filtersMenuButton}>
        <img
          src={buttonLogo}
          className={styles.buttonNameLogo}
          alt="logo name button "
        ></img>
        <img
          src={arrow}
          style={{
            transform: isRotated && "rotate(180deg)",
          }}
          className={styles.arrowInButton}
          alt="arrow in button"
        ></img>
        <button className={styles.filtersMenuButton}>{buttonName}</button>
      </div>

      <div className={styles.criteriaWrap}>
        <h3 className={styles.criteriaName}>Selected {criteria}</h3>
        <span className={styles.selectedCountrySpan}>
          {selectedByCriterion}
        </span>
      </div>

      {openButton && (
        <div className={styles.filtersMenuWrap}>
          <input onChange={(event) => enterSubstr(event)} />

          {teachers.map((item) => {
            return (
              <div className={styles.countryFlagWrap}>
                <div key={item} onClick={() => selectTargetValue(item)}>
                  {targetName(item)}
                </div>
                {flag(item)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
