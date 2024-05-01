import { Star } from "./images/svgImages";
import { TranslationIcon } from "./images/svgImages";
import json from "./data.json";
import styles from "./teacherCard.module.css";
import { AllSpeakelanguage } from "./language";

export function Teacher() {
  return (
    <section className={styles.sectionTeacherCard}>
      <div className={styles.cardFlexWrap}>
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

          <div className="translation">
            <TranslationIcon />
            <span className="ShowTranslation">{}</span>
          </div>

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
