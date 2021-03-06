import { FETCH_CALEND_CHAMP_SUCCESS } from "../types";

const initialState = {
    dati: [],    
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CALEND_CHAMP_SUCCESS:
            return {
                ...state,
                dati: action.response
            };
        default:
            return state;
    }
}