import { ADD_MAGIC } from "../types";

const initialState = {
    magicList: []
};

export default function (state = initialState, action) {
    
    switch (action.type) {
        case ADD_MAGIC:
        return {
            ...state,
            magicList: action.payload
        }
        default:
            return state;
    }
}