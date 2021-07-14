import { combineReducers } from "redux";
import EntitiesReducer from "./Entities";

export default combineReducers({
  entities: EntitiesReducer,
});
