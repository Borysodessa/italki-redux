export const countryfilter = (selectedCountry) => {
  return {
    type: "SELECTEDCOUNTRY",
    payload: selectedCountry,
  };
};

export const languageFilter = (selectedLanguage) => {
  return {
    type: "SELECTEDLANGUAGE",
    payload: selectedLanguage,
  };
};

export const clearFilter = () => {
  return {
    type: "CLEAR",
    payload: [],
  };
};

export const changeParametr = (buttonName) => {
  return {
    type: "CHANGE",
    payload: buttonName,
  };
};
