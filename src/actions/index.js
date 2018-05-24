import { CALCULATE_SCORE, FETCH_TEAMS_REQUEST, SET_URL_PARAM, FETCH_CLASS_EUROPE_REQUEST, FETCH_CLASS_CHAMP_REQUEST, FETCH_CLASS_ITALIA_REQUEST } from "../types";

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

export const fetchClassEurope = () => {
    return {
        type: FETCH_CLASS_EUROPE_REQUEST,
    }
};

export const fetchClassChampions = () => {
    return {
        type: FETCH_CLASS_CHAMP_REQUEST,
    }
};

export const fetchClassItalia = () => {
    return {
        type: FETCH_CLASS_ITALIA_REQUEST,
    }
};

export const setUrlParam = (param) => {
    return {
        type: SET_URL_PARAM,
        payload: param
    }
};