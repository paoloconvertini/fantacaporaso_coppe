import { FETCH_CLASS_ITALIA_SUCCESS } from "../types";

const initialState = {
    dati: [],    
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CLASS_ITALIA_SUCCESS:
            return {
                ...state,
                dati: action.response
            };
        default:
            return state;
    }
}