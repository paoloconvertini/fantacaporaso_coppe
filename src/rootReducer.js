import { combineReducers } from "redux";
import teams from "./reducers/teamReducer";
import score from "./reducers/scoreReducer";
import param from "./reducers/paramUrlReducer";
import classificaCoppaItalia from "./reducers/classCoppaItaliaReducer";
import classificaChampions from "./reducers/classificaChampionsReducer";
import classificaEuropeLeague from "./reducers/classificaEuropeReducer";



export default combineReducers({
    teams,
    score,
    param,
    classificaCoppaItalia,
    classificaChampions,
    classificaEuropeLeague
});