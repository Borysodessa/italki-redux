import { useState } from "react";
import styles from "../styles/sort.module.css";
import { Arrow } from "./arrow";

export function Sort() {
  //const [arrowRotate, setArrowRotate] = useState(false); //?////////////
  //const [selectedSort, setSelectedSort] = useState("orderByLessons");

  const [selectedSort, setSelectedSort] = useState({
    orderByLessons: true,
    orderByStudents: false,
    orderByRatio: false,
    orderByPrice: false,
  });

  const sorts = [
    "orderByLessons",
    "orderByStudents",
    "orderByRatio",
    "orderByPrice",
  ];

  const sortsFilter = sorts
    .filter((sort) => selectedSort[sort] === true)
    .join("");

  function rotate(sort) {
    const aRot = { ...selectedSort };
    if (!selectedSort[sort]) {
      setSelectedSort(
        {
          [sort]: !aRot[sort],
        },
        (aRot[sortsFilter] = false)
      );
    }
  }

  return (
    <div className={styles.sortButtonWrap}>
      {sorts.map((sort) => (
        <div
          key={sort}
          style={{ backgroundColor: "#ecf45b" }}
          className={styles.sortArrowWrap}
          onClick={() => rotate(sort)}
        >
          <Arrow
            arrowStyle={styles.arrowInSortButton}
            arrowSort={selectedSort[sort]}
            selectedSort={selectedSort}
          />
          <button
            style={{
              ...(selectedSort[sort] && { backgroundColor: "#ecf45b" }),
            }}
          >
            {sort}
          </button>
        </div>
      ))}
    </div>
  );
}

// function sortByItems(finalFilter) {
//   return { orderByitems }
//     ? finalFilter.sort(
//         (a, b) => b.teacher_info.session_count - a.teacher_info[{ count }]
//       )
//     : finalFilter.sort(
//         (a, b) => a.teacher_info.session_count - b.teacher_info[{ count }]
//       );
// }
