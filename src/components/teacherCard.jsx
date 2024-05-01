import { TranslationIcon } from "./images/svgImages";
import json from "./data.json";
import styles from "./teacherCard.module.css";
import { AllSpeakelanguage } from "./language";
import { Avatar } from "./avatar";

export function Teacher() {
  return (
    <section className={styles.sectionTeacherCard}>
      <div className={styles.cardFlexWrap}>
        <Avatar />
        <div>
          <h3 className={styles.nickname}>{json.data[0].user_info.nickname}</h3>
          <img className="verifiedIdentity" src="" alt=""></img>

          <span className={styles.job}>
            {json.data[0].teacher_info.exp_info[0].job}
          </span>

          <div className={styles.languageFlexWrap}>
            <p className={styles.teach_language}>speaks: </p>
            <span className={styles.speakLanguage}>
              <AllSpeakelanguage />
            </span>
          </div>

          <p className={styles.aboutMe}>
            <span className={styles.shortSignature}>
              {json.data[0].teacher_info.short_signature}
            </span>
            {json.data[0].teacher_info.intro}
          </p>

          <div className={styles.trialLessons}>
            <div className="priceTrial">
              <span className={styles.currency}>usd </span>
              <span className={styles.price}>
                {json.data[0].course_info.trial_price}
              </span>
              <span className={styles.trial}>/ trial</span>
            </div>

            <div className={styles.buttonTrialWrap}>
              <input type="checkbox"></input>
              <button className={styles.bookTrial} type="button">
                Book trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
