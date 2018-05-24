import { FETCH_CLASS_CHAMP_SUCCESS } from "../types";

const initialState = {
    dati: [],    
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CLASS_CHAMP_SUCCESS:
            return {
                ...state,
                dati: action.response.dati
            };
        default:
            return state;
    }
}
