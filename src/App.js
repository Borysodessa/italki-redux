import "./App.css";
import { useState } from "react";
import json from "./components/data.json";
import { Teacher } from "./components/teacher";
import { Filter } from "./components/filters";
import { languageData, languageFlag } from "./components/languageData";
import {
  countryName,
  criterionCountry,
  сountryData,
  countryFlag,
} from "./components/countryData";
import { languageName, criterionLanguage } from "./components/languageData";
import arrow from "./components/images/arrow.svg";
import countryLogo from "./components/images/buttonLogos/countryLogo.svg";
import languageLogo from "./components/images/buttonLogos/languageLogo.svg";

export function App() {
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

  const filteredTeachersByLanguage = json.data.filter((teacher) => {
    return selectedLanguage.every((el) => {
      return [
        ...teacher.teacher_info.teach_language,
        ...teacher.teacher_info.also_speak,
      ]
        .map((item) => item["language"])
        .includes(el);
    });
  });

  const finalFilter = filteredTeachersByLanguage.filter((teacher) => {
    return selectedCountry.length === 0
      ? filteredTeachersByLanguage
      : selectedCountry.includes(teacher.user_info.living_country_id);
  });

  function numberOfTeachersByLanguage(filteredTeachersByLanguage) {
    if (selectedLanguage.length > 0) {
      return filteredTeachersByLanguage.length;
    }
    return 0;
  }

  const numberOfTeachersByCountry = json.data.filter((teacher) => {
    return selectedCountry.includes(teacher.user_info.living_country_id);
  }).length;

  return (
    <div>
      <Filter
        numberOfTeachers={numberOfTeachersByCountry}
        renderItem={countryFlag}
        targetName={countryName}
        buttonLogo={languageLogo}
        arrow={arrow}
        selectedByCriterion={criterionCountry(selectedCountry)}
        criteria={"Country"}
        buttonName={"Teacher is from"}
        teachersData={сountryData(json.data)}
        selectedTarget={selectedCountry}
        setSelectedTarget={setSelectedCountry}
      />
      <Filter
        numberOfTeachers={numberOfTeachersByLanguage(
          filteredTeachersByLanguage
        )}
        flag={languageFlag}
        buttonLogo={countryLogo}
        arrow={arrow}
        selectedByCriterion={criterionLanguage(selectedLanguage)}
        targetName={languageName}
        criteria={"Language"}
        buttonName={"language"}
        selectedTarget={selectedLanguage}
        setSelectedTarget={setSelectedLanguage}
        teachersData={languageData(json.data)}
      />
      {finalFilter.map((teacher) => (
        <Teacher
          selectedCountry={selectedCountry}
          key={teacher.user_info.user_id}
          teacherInfo={teacher.teacher_info}
          userInfo={teacher.user_info}
          courseInfo={teacher.course_info}
        />
      ))}
    </div>
  );
}
