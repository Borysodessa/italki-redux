// export function sortByLessons(finalFilter, changeRotate) {
//   return finalFilter.sort((a, b) => {
//     const sessionA = a.teacher_info.session_count;
//     const sessionB = b.teacher_info.session_count;
//     return changeRotate ? sessionB - sessionA : sessionA - sessionB;
//   });
// }

// export function sortByStudents(finalFilter, changeRotate) {
//   return finalFilter.sort((a, b) => {
//     const studentA = a.teacher_info.student_count;
//     const studentB = b.teacher_info.student_count;
//     return changeRotate ? studentB - studentA : studentA - studentB;
//   });
// }

// export function sortByRatio(finalFilter, changeRotate) {
//   return finalFilter.sort((a, b) => {
//     const ratioA = a.teacher_info.session_count / a.teacher_info.student_count;
//     const ratioB = b.teacher_info.session_count / b.teacher_info.student_count;

//     return changeRotate ? ratioB - ratioA : ratioA - ratioB;
//   });
// }

// export function sortByPrice(finalFilter, changeRotate) {
//   return finalFilter.sort((a, b) => {
//     const courseA = a.course_info.min_price;
//     const courseB = b.course_info.min_price;

//     return changeRotate ? courseB - courseA : courseA - courseB;
//   });
// }
const sortValue = {
  orderByLessons: (item) => item.teacher_info.session_count,
  orderByStudents: (item) => item.teacher_info.student_count,
  orderByRatio: (item) =>
    item.teacher_info.session_count / item.teacher_info.student_count,
  orderByPrice: (item) => item.course_info.min_price,
};

export const sorting = (finalFilter, sortBy, changeRotate) => {
  // const getSortValue = (item) => {
  //   if (sortBy === "orderByLessons") {
  //     return item.teacher_info.session_count;
  //   } else if (sortBy === "orderByStudents") {
  //     return item.teacher_info.student_count;
  //   } else if (sortBy === "orderByRatio") {
  //     return item.teacher_info.session_count / item.teacher_info.student_count;
  //   } else if (sortBy === "orderByPrice") {
  //     return item.course_info.min_price;
  //   }
  // };
  // const getSortValue = (item) => {
  //   return sortValue[sortBy];
  // };

  return finalFilter.toSorted((a, b) => {
    const valueA = sortValue[sortBy](a);
    const valueB = sortValue[sortBy](b);
    return changeRotate ? valueB - valueA : valueA - valueB;
  });
};
