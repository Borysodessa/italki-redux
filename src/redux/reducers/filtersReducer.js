const filtersInitialState = {
  selectedCountry: ["PK"],
  selectedLanguage: [],
};

export function filtersReducer(state = filtersInitialState, action) {
  if (action.type === "SELECTEDCOUNTRY") {
    return {
      ...state,
      selectedCountry: action.payload,
    };
  }
  if (action.type === "SELECTEDLANGUAGE") {
    return {
      ...state,
      selectedLanguage: action.payload,
    };
  }
  if (action.type === "CLEAR") {
    return {
      ...state,
      selectedCountry: action.payload,
      selectedLanguage: action.payload,
    };
  }
  return state;
}
