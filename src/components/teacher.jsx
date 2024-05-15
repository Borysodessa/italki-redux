import styles from "../styles/teacherCard.module.css";
import { AllSpeakeLanguage } from "./language";
import { Avatar } from "./avatar";
import { Trial } from "./trialLessons";
import { AboutMe } from "./aboutMe";
import { TitleAndJob } from "./titleAndJob";

export function Teacher({ teacherInfo, userInfo, courseInfo }) {
  return (
    <section className={styles.sectionTeacherCard}>
      <div className={styles.cardFlexWrap}>
        <Avatar teacherInfo={teacherInfo} userInfo={userInfo} />
        <div>
          <TitleAndJob teacherInfo={teacherInfo} userInfo={userInfo} />
          <AllSpeakeLanguage teacherInfo={teacherInfo} />
          <AboutMe teacherInfo={teacherInfo} />
          <Trial courseInfo={courseInfo} />
        </div>
      </div>
    </section>
  );
}
