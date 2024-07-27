import { useSelector } from "react-redux";
import styles from "../styles/teacherContent.module.css";
import { PricePerTime } from "./pricePerTime";

export function TeacherContent() {
  const selteacher = useSelector((state) => {
    return state.filters.selectedTeacher;
  });

  const minPrice = useSelector((state) => {
    return state.filters.minPrice;
  });
  const maxPrice = useSelector((state) => {
    return state.filters.maxPrice;
  });

  if (selteacher === null) {
    return null;
  }
  return (
    <div className={styles.teacherContentWrap}>
      <div>{selteacher.user_info.nickname}</div>

      {selteacher.pro_course_detail.map((oneCourse) => {
        return (
          <PricePerTime
            key={oneCourse.id}
            oneCourse={oneCourse}
            packageMin={minPrice}
            packageMax={maxPrice}
          />
        );
      })}
    </div>
  );
}
