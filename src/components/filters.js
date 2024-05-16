import styles from "../styles/filter.module.css";
import { useState } from "react";
import { countryFullName } from "./countryData";

export function Filter({
  targetName,
  selectedTarget,
  teachersData,
  buttonName,
  setSelectedTarget,
  criteria,
}) {
  const [openButton, setOpenButton] = useState(false);
  const [substr, setSubstr] = useState("");

  function selectTargetValue(i) {
    if (selectedTarget.includes(i)) {
      setSelectedTarget(selectedTarget.filter((el) => el !== i));
    } else {
      setSelectedTarget([...selectedTarget, ...[i]]);
    }
  }

  function languagesButton() {
    setOpenButton(() => !openButton);
  }

  function enterSubstr(event) {
    setSubstr(() => event.target.value);
  }

  const selectedCriteria = selectedTarget
    .map((target) =>
      Object.keys(countryFullName).includes(target)
        ? countryFullName[target]
        : target
    )
    .join(", ");

  const teachers = teachersData.filter((teacher) =>
    targetName(teacher).toLowerCase().includes(substr.toLocaleLowerCase())
  );
  console.log(teachers);
  return (
    <div>
      <button className={styles.openLanguagesButton} onClick={languagesButton}>
        {buttonName}
      </button>

      <div className={styles.criteriaWrap}>
        <h3 className={styles.criteriaName}>Selected {criteria}</h3>
        <span>{selectedCriteria}</span>
      </div>

      {openButton && (
        <div className={styles.languagesWrap}>
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
