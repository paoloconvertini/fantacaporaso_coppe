import { CALCULATE_SCORE } from "../types";

export default function (state = 0, action) {
    
    switch (action.type) {
        case CALCULATE_SCORE:
        const magic = action.payload - 66;
        const add = 6;
        let molt = 0;
        if(state !== 0) {
            state = state - state;
        }
        if(magic < 0) {
            return state = state + molt;
        } else {
            while (!( magic >= (add * molt) && magic < (add * (molt+1)))) {
                molt++;
            }
            return state = state + (molt + 1);
        }
        default:
            return state;
    }
}