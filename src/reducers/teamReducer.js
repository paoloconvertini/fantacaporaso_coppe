import { FETCH_TEAMS_SUCCESS } from "../types";

const initialState = [];


export default function(state = initialState, action){
    const teams = action.teams;
    switch (action.type) {
        case FETCH_TEAMS_SUCCESS:
        return [...state, ...teams];
        default:
            return state;
    }
}