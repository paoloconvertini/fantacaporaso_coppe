import { FETCH_TEAMS_SUCCESS } from "../types";
import initialState from "./initialState";


export default function(state = [], action){
    switch (action.type) {
        case FETCH_TEAMS_SUCCESS:
        console.log(state);
        console.log(action.teams);
        console.log(action);
            return {
                teams: action.teams
            }
        default:
            return state;
    }
}