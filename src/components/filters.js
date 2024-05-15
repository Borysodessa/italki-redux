import styles from "../styles/filter.module.css";
import { useState } from "react";
import { countryFullName } from "./countryData";

export function Filter({
  selectedTarget,
  teachersData,
  buttonName,
  setSelectedTarget,
}) {
  const [openButton, setOpenButton] = useState(false);
  const [substr, setSubstr] = useState("");

  function selectTargetValue(i) {
    const countryCode = Object.keys(countryFullName).find(
      (k) => countryFullName[k] === i
    );
    if (countryCode) {
      i = countryCode;
    }

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

  return (
    <div>
      <button className={styles.openLanguagesButton} onClick={languagesButton}>
        {buttonName}
      </button>

      {openButton && (
        <div className={styles.languagesWrap}>
          <input onChange={(event) => enterSubstr(event)} />

          {teachersData.map((item) => {
            if (countryFullName.hasOwnProperty(item)) {
              item = countryFullName[item];
            }
            return (
              item.includes(substr) && (
                <div key={item} onClick={() => selectTargetValue(item)}>
                  {item}
                </div>
              )
            );
          })}
        </div>
      )}
    </div>
  );
}
