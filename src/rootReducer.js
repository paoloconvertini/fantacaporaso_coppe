import { combineReducers } from "redux";
import score from "./reducers/scoreReducer";
import param from "./reducers/paramUrlReducer";
import classGirone from "./reducers/classGironeReducer";
import classificaCoppaItalia from "./reducers/classCoppaItaliaReducer";
import classificaChampions from "./reducers/classificaChampionsReducer";
import classificaEuropeLeague from "./reducers/classificaEuropeReducer";
import calendarioCoppaItalia from "./reducers/calendarioCoppaItaliaReducer";
import calendarioChampions from "./reducers/calendarioChampionsReducer";
import calendarioEuropeLeague from "./reducers/calendarioEuropeReducer";



export default combineReducers({
    score,
    param,
    classGirone,
    classificaCoppaItalia,
    classificaChampions,
    classificaEuropeLeague,
    calendarioCoppaItalia,
    calendarioChampions,
    calendarioEuropeLeague
});