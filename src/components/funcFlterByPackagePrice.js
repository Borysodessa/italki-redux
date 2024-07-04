const elementPriceList = {
   package_price: 5000,
  session_price: 1000,
  course_id: 72533,
  package_length: 5,
  session_length: 2,
  course_price_id: 144821,
};
elementPriceList.packagePrice = 
export function oneHourPrices(elementPriceList) {
  return (
    elementPriceList
      .map(
        (obj) =>
          (obj.pricePerOneHour =
            (prices.session_price / 100 / quantityTime[prices.session_length]) *
            60)
      )
      .toFixed(2),
    (obj.oneHourFromPackage =
      obj.prices.package_price / 100 / prices.package_length)
  );
}
