export function filterByPrice(min, max, anySorting) {
  return anySorting.filter(
    (item) =>
      item.course_info.min_price >= min * 100 &&
      item.course_info.min_price <= max * 100
  );
}
