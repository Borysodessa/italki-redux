import styles from "../styles/pricePerTime.module.css";
import { priceListItem } from "./priceListItem";
import classNames from "classnames";
import { actualPrice } from "./funcPrices";

export function PricePerTime({ oneCourse, packageMax, packageMin }) {
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

        {courses.map((price) => {
          console.log("pppp", actualPrice(price, packageMin, packageMax));
          return (
            <div key={price.course_price_id} className={styles.columnWrap}>
              <div className={styles.cell}>
                {priceListItem(price).sessionLength}
                <span> min</span>
              </div>
              <div className={styles.oneHouerCell}>
                {priceListItem(price).sessionPrice}
                <span
                  className={classNames({
                    [styles.actualColor]: actualPrice(
                      price,
                      packageMin,
                      packageMax
                    ),
                  })}
                >
                  {priceListItem(price).pricePerOneHour}
                </span>
              </div>
              <div className={styles.cell}>
                <div
                  className={classNames({
                    [styles.actualColor]: actualPrice(
                      price,
                      packageMin,
                      packageMax
                    ),
                  })}
                >
                  {priceListItem(price).oneHourFromPackage}
                </div>
                <div>
                  {priceListItem(price).packagePrice}
                  <span>$ / {price.package_length}L</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
