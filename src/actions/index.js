import { CALCULATE_SCORE, FETCH_TEAMS_REQUEST, SET_URL_PARAM } from "../types";

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

export const setUrlParam = (param) => {
    return {
        type: SET_URL_PARAM,
        payload: param
    }
};