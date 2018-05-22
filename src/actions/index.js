import { CALCULATE_SCORE, FETCH_TEAMS_REQUEST } from "../types";

export const calculateScore = (score) => {
    return {
        type: CALCULATE_SCORE,
        payload: score
    }
};

export const fetchTeamsAction = () => {
    return {
        type: FETCH_TEAMS_REQUEST,
    }
};