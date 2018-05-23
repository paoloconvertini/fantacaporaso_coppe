import { combineReducers } from "redux";
import teams from "./reducers/teamReducer";
import score from "./reducers/scoreReducer";


export default combineReducers({
    teams,
    score
});