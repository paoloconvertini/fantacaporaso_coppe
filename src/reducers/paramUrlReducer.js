import { SET_URL_PARAM } from "../types";

const initialState = "";

export default function(state = initialState, action){
    switch (action.type) {
        case SET_URL_PARAM:
        return action.payload;
        default:
            return state;
    }
}