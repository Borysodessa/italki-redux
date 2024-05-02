import "./App.css";
import json from "./components/data.json";
import { Teacher } from "./components/teacherCard";

export function App() {
  return (
    <div>
      {json.data.map((teacher) => (
        <Teacher
          key={teacher.user_info.user_id}
          teacherInfo={teacher.teacher_info}
          userInfo={teacher.user_info}
          courseInfo={teacher.course_info}
        />
      ))}
    </div>
  );
}
