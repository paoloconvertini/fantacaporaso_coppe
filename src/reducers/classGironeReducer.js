import { SET_CLASSIFICA_GIRONE } from "../types";

const initialState = "";

export default function (state = initialState, action) {

    switch (action.type) {
        case SET_CLASSIFICA_GIRONE:
            return state = state + action.payload
        default:
            return state
    }
}