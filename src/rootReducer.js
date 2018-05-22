import { combineReducers } from "redux";
import teams from "./reducers/teamReducer";
import magicPunti from "./reducers/magicPuntiReducer";
import pippo from "./reducers/scoreReducer";


export default combineReducers({
    teams,
    magicPunti,
    pippo
});