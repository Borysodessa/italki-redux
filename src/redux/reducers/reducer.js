import { combineReducers } from "redux";
import { sortReducer } from "./sortReducer";
import { filtersReducer } from "./filtersReducer";

export const rootReducer = combineReducers({
  filters: filtersReducer,
  sorts: sortReducer,
});
