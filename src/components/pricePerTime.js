import styles from "../styles/pricePerTime.module.css";

const quantityTime = {
  2: 30,
  3: 45,
  4: 60,
  5: 75,
  6: 90,
};

export function PricePerTime({ oneCourse }) {
  const courses = oneCourse.price_list;

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableLanguage}>language: {oneCourse.language}</div>
      <div className={styles.tableTitle}>{oneCourse.title}</div>
      <div className={styles.tableWrap}>
        <div className={styles.titleWrap}>
          <div className={styles.nameCell}>time</div>
          <div className={styles.nameCell}>
            session price <span>price per 1 hour</span>
          </div>

          <div className={styles.nameCell}>
            <span>package price 1 hour</span>package price
          </div>
        </div>

        {courses.map((prices) => {
          const pricePerOneHour = (
            (prices.session_price / 100 / quantityTime[prices.session_length]) *
            60
          ).toFixed(2);
          const oneHourFromPackage =
            prices.package_price / 100 / prices.package_length;

          return (
            <div key={prices.course_price_id} className={styles.columnWrap}>
              <div className={styles.cell}>
                {quantityTime[prices.session_length]}
                <span> min</span>
              </div>
              <div className={styles.oneHouerCell}>
                {prices.session_price / 100}
                <span>{pricePerOneHour}</span>
              </div>
              <div className={styles.cell}>
                <div>{oneHourFromPackage.toFixed(2)}</div>
                <div>
                  {prices.package_price / 100}
                  <span>$ / {prices.package_length}L</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
