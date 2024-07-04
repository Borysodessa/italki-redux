import styles from "../styles/priceFilter.module.css";

export function PriceFilter({ min, setMin, max, setMax }) {
  function minValue(event) {
    setMin(event.target.value);
  }

  function maxValue(event) {
    setMax(event.target.value);
  }

  return (
    <div className={styles.main}>
      <input value={min} onInput={(event) => minValue(event)}></input>
      <input value={max} onInput={(event) => maxValue(event)}></input>
    </div>
  );
}
