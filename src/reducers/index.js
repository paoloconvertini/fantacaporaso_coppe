import { combineReducer } from "redux";
import TeamReducer from "./teamReducer";

const rootReducer = combineReducer({
    teams: TeamReducer
});
