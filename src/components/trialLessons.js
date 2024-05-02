import styles from "./teacherCard.module.css";

export function Trial({ courseInfo }) {
  return (
    <div className={styles.trialLessons}>
      <div className="priceTrial">
        <span className={styles.currency}> pkr </span>
        <span className={styles.price}>{courseInfo.trial_price}</span>
        <span className={styles.trial}>/ trial</span>
      </div>

      <div className={styles.buttonTrialWrap}>
        <input type="checkbox"></input>
        <button className={styles.bookTrial} type="button">
          Book trial
        </button>
      </div>
    </div>
  );
}
