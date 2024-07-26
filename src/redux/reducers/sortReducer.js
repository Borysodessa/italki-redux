const sortInitialState = {
  change: {
    selectButton: "orderByLessons",
    rotate: false,
  },
};

export function sortReducer(state = sortInitialState, action) {
  if (action.type === "CHANGE") {
    return {
      ...state,
      change: action.payload,
    };
  }
  return state;
}
