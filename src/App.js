import "./App.css";
import json from "./components/data.json";
import { Teacher } from "./components/teacherCard";
import { Filter } from "./components/filters";
import { useState } from "react";
import { сountryData } from "./components/countryData";

export function App() {
  const [selectedLanguage, setSelectedLanguage] = useState([]);

  const filteredTeachers = json.data.filter((teacher) => {
    return selectedLanguage.every((el) => {
      return [
        ...teacher.teacher_info.teach_language,
        ...teacher.teacher_info.also_speak,
      ]
        .map((el) => el["language"])
        .includes(el);
    });
  });

  return (
    <div>
      <Filter
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        teachersData={json.data}
      />
      {filteredTeachers.map((teacher) => (
        <Teacher
          key={teacher.user_info.user_id}
          teacherInfo={teacher.teacher_info}
          userInfo={teacher.user_info}
          courseInfo={teacher.course_info}
          teachersData={json.data}
        />
      ))}
    </div>
  );
}
