import styles from "./teacherCard.module.css";

export function AboutMe({ teacherInfo }) {
  return (
    <p className={styles.aboutMe}>
      <span className={styles.shortSignature}>
        {teacherInfo.short_signature}
      </span>
      {teacherInfo.intro}
    </p>
  );
}
