import "./App.css";
import styles from "./styles/app.module.css";
import { useState } from "react";

import { TeacherList } from "./components/teachersList";
import { TeacherContent } from "./components/teacherContent";
import json from "./components/data.json";

export function App() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  return (
    <div className={styles.appMainWrap}>
      <div>
        <TeacherList
          jsonData={json.data}
          setSelectedTeacher={setSelectedTeacher}
        />
      </div>
      <div>
        <TeacherContent selectedTeacher={selectedTeacher} />
      </div>
    </div>
  );
}
