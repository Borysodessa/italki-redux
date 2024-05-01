import styles from "./teacherCard.module.css";
import json from "./data.json";
import { Star } from "./images/svgImages";
export function Avatar() {
  return (
    <div className={styles.avatarWrap}>
      <img
        className={styles.avatar}
        src={json.data[0].teacher_info.video_pic_url}
        width="76"
        alt=""
      ></img>
      <img src={json.data[0].teacher_info.avatar_file_name} alt=""></img>
      <div className={styles.ratingWrap}>
        <div className={styles.rating}>
          <Star />{" "}
          <span className={styles.ratingNumber}>
            {json.data[0].teacher_info.pro_rating}
          </span>
        </div>
        <div className={styles.numberOfLessons}>
          <span> {json.data[0].teacher_info.session_count} </span>Lessons
        </div>
      </div>
    </div>
  );
}
