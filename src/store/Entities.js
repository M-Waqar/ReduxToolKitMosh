import { combineReducers } from "redux";
import ProjectReducer from "./Projects";
import BugReducer from "./Bugs";
import UserReducer from "./Users";

export default combineReducers({
  bugs: BugReducer,
  projects: ProjectReducer,
  users: UserReducer,
});
