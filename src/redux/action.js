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

export const choiceOfTeachers = (e) => {
  return {
    type: "SELECTEDTEACHER",
    payload: e,
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

export const getMinValue = (e) => {
  return {
    type: "MINVALUE",
    payload: e,
  };
};
export const getMaxValue = (e) => {
  return {
    type: "MAXVALUE",
    payload: e,
  };
};
