import styles from "../styles/teacherCard.module.css";

import { Star } from "./images/svgImages";
export function Avatar({ teacherInfo, userInfo }) {
  const flag = userInfo.living_country_id.toLowerCase();

  return (
    <div className={styles.avatarWrap}>
      <img
        className={styles.avatar}
        src={teacherInfo.video_pic_url}
        width="76"
        alt=""
      ></img>
      <img
        src={"https://scdn.italki.com/orion/static/flags/" + flag + ".svg"}
        alt="country_flag"
      ></img>
      <div className={styles.ratingWrap}>
        <div className={styles.rating}>
          <Star />
          <span className={styles.ratingNumber}>{teacherInfo.pro_rating}</span>
        </div>
        <div className={styles.numberOfLessons}>
          <span> {teacherInfo.session_count} </span>Lessons
        </div>
      </div>
    </div>
  );
}
