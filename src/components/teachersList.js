import styles from "../styles/teachersList.module.css";
import { useState } from "react";

import { Teacher } from "./teacher";
import { Filter } from "./filters";
import { languageData } from "./languageData";
import {
  countryName,
  criterionCountry,
  сountryData,
  countryFlag,
} from "./countryData";
import { criterionLanguage } from "./languageData";
import { FilterByPackagePrice } from "./filterByPackagePrice.js";
import countryLogo from "./images/buttonLogos/countryLogo.svg";
import languageLogo from "./images/buttonLogos/languageLogo.svg";
import { ClearAll } from "./clearAll";
import { Sort } from "./sort";
import { sorting } from "./sortFunction";
import { PriceFilter } from "./priceFilter";
import { filterByPrice } from "./filterByPrice";

export function TeacherList({ jsonData, setSelectedTeacher }) {
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [change, setChange] = useState({
    selectButton: "orderByLessons",
    rotate: false,
  });

  const [min, setMin] = useState("0");
  const [max, setMax] = useState("20");
  const [packageMin, setPackageMin] = useState("0");
  const [packageMax, setPackageMax] = useState("20");

  const changeRotate = change.rotate;
  const selectedButton = change.selectButton;

  function clear() {
    setSelectedCountry([]);
    setSelectedLanguage([]);
    setMin("");
    setMax("");
  }

  const filteredTeachersByLanguage = jsonData.filter((teacher) => {
    return selectedLanguage.every((el) => {
      return [
        ...teacher.teacher_info.teach_language,
        ...teacher.teacher_info.also_speak,
      ]
        .map((item) => item["language"])
        .includes(el);
    });
  });

  const anyFilter = filteredTeachersByLanguage.filter((teacher) => {
    return selectedCountry.length === 0
      ? filteredTeachersByLanguage
      : selectedCountry.includes(teacher.user_info.living_country_id);
  });

  const anySorting = sorting(anyFilter, selectedButton, changeRotate);

  const anyPriceFilter = filterByPrice(min, max, anySorting);

  //   funcFilterByPackagePrice(packageMin, packageMax, anyPriceFilter);
  //   console.log();
  //   console.log(
  //     "ffffff",
  //     funcFilterByPackagePrice(packageMin, packageMax, anyPriceFilter)
  //   );

  function numberOfTeachersByLanguage(filteredTeachersByLanguage) {
    if (selectedLanguage.length > 0) {
      return filteredTeachersByLanguage.length;
    }
    return 0;
  }

  const numberOfTeachersByCountry = jsonData.filter((teacher) => {
    return selectedCountry.includes(teacher.user_info.living_country_id);
  }).length;

  const countryStyles = { left: 30 };
  const languageStyles = { left: 315 };

  return (
    <div>
      <div className={styles.filtersWrap}>
        <Filter
          change={change}
          setChange={setChange}
          filterMenuStyles={countryStyles}
          numberOfTeachers={numberOfTeachersByCountry}
          renderItem={countryFlag}
          targetName={countryName}
          buttonLogo={languageLogo}
          selectedByCriterion={criterionCountry(selectedCountry)}
          criteria={"Country"}
          buttonName={"Teacher is from"}
          teachersData={сountryData(jsonData)}
          selectedTarget={selectedCountry}
          setSelectedTarget={setSelectedCountry}
        />
        <Filter
          change={change}
          setChange={setChange}
          filterMenuStyles={languageStyles}
          numberOfTeachers={numberOfTeachersByLanguage(
            filteredTeachersByLanguage
          )}
          buttonLogo={countryLogo}
          selectedByCriterion={criterionLanguage(selectedLanguage)}
          criteria={"Language"}
          buttonName={"language"}
          selectedTarget={selectedLanguage}
          setSelectedTarget={setSelectedLanguage}
          teachersData={languageData(jsonData)}
        />

        <Sort change={change} setChange={setChange} />
      </div>

      <ClearAll clear={clear} />

      <PriceFilter min={min} setMin={setMin} max={max} setMax={setMax} />

      <FilterByPackagePrice
        setPackageMin={setPackageMin}
        setPackageMax={setPackageMax}
        packageMin={packageMin}
        packageMax={packageMax}
      />

      <div className={styles.flexWrap}>
        <div className={styles.teacherContainer}>
          {anyPriceFilter.map((teacher) => (
            <div
              key={teacher.user_info.user_id}
              className={styles.anyPriceFilterWrap}
            >
              <Teacher
                anyPriceFilter={anyPriceFilter}
                teacher={teacher}
                selectedCountry={selectedCountry}
                key={teacher.user_info.user_id}
                setSelectedTeacher={setSelectedTeacher}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
