export const countryFullName = {
  PK: "Pakistan",
  EG: "Egipt",
  ZA: "SouthAfrica",
  CN: "China",
  CA: "Canada",
  NG: "Nigeria",
  TR: "Turkey",
  ZW: "Zimbabwe",
  MZ: "Mozambique",
  DZ: "Algiers",
  GR: "Greece",
  PT: "Portugal",
  TW: "Taiwan",
};

export function сountryData(teachersDataBase) {
  return [
    ...new Set(
      teachersDataBase.map((teacher) => teacher.user_info.living_country_id)
    ),
  ]; //.map((country) => countryFullName[country]);
}
