import { FETCH_CLASS_EUROPE_SUCCESS } from "../types";

const initialState = {
    dati: [],    
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CLASS_EUROPE_SUCCESS:
            return {
                ...state,
                dati: action.response.dati
                
            };
        case "AGGIORNA_PUNTI":
            let idSquadra = 1;
            return {
                ...state,
                dati: [
                    ...state.dati,                    
                ]
            };
        default:
            return state;
    }
}