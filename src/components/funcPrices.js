import { priceListItem } from "./priceListItem";

function getTeacherPrices(teacher) {
  return teacher.pro_course_detail
    .map((obj) =>
      (obj = obj.price_list).map((el) => [
        +priceListItem(el).pricePerOneHour,
        priceListItem(el).oneHourFromPackage,
      ])
    )
    .flat(2);
}

export function filteringTeachersByPricesPerHour(
  packageMin,
  packageMax,
  anyPriceFilter
) {
  return anyPriceFilter.filter((teacher) => {
    return getTeacherPrices(teacher).some(
      (el) => el > packageMin && el < packageMax
    );
  });
}

export function actualPrice(price, packageMin, packageMax) {
  return +priceListItem(price).oneHourFromPackage > packageMin &&
    +priceListItem(price).oneHourFromPackage < packageMax
    ? true
    : false;
}
