import styles from "./teacherCard.module.css";
import { AllSpeakelanguage } from "./language";
import { Avatar } from "./avatar";
import { Trial } from "./trialLessons";
import { AboutMe } from "./aboutMe";
import { TitleAndJob } from "./titleAndJob";

export function Teacher({ teacherInfo, userInfo, courseInfo }) {
  return (
    <section className={styles.sectionTeacherCard}>
      <div className={styles.cardFlexWrap}>
        <Avatar teacherInfo={teacherInfo} />
        <div>
          <TitleAndJob teacherInfo={teacherInfo} userInfo={userInfo} />
          <AllSpeakelanguage teacherInfo={teacherInfo} />
          <AboutMe teacherInfo={teacherInfo} />

          <Trial courseInfo={courseInfo} />
        </div>
      </div>
    </section>
  );
}
