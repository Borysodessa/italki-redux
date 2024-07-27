import "../App.css";
import styles from "../styles/app.module.css";

import json from "./data.json";
import { TeacherList } from "./teachersList";
import { TeacherContent } from "./teacherContent";

export function TeacherProfileLayout() {
  return (
    <div className={styles.appMainWrap}>
      <div>
        <TeacherList jsonData={json.data} />
      </div>
      <div>
        <TeacherContent />
      </div>
    </div>
  );
}
