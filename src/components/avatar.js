import styles from "../styles/teacherCard.module.css";

import { Star } from "./images/svgImages";
export function Avatar({ teacherInfo }) {
  return (
    <div className={styles.avatarWrap}>
      <img
        className={styles.avatar}
        src={teacherInfo.video_pic_url}
        width="76"
        alt=""
      ></img>
      <img src={teacherInfo.avatar_file_name} alt=""></img>
      <div className={styles.ratingWrap}>
        <div className={styles.rating}>
          <Star />{" "}
          <span className={styles.ratingNumber}>{teacherInfo.pro_rating}</span>
        </div>
        <div className={styles.numberOfLessons}>
          <span> {teacherInfo.session_count} </span>Lessons
        </div>
      </div>
    </div>
  );
}
