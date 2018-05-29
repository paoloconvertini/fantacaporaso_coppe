import { ADD_MAGIC, CALCULATE_SCORE, SET_URL_PARAM, FETCH_CLASS_EUROPE_REQUEST, FETCH_CLASS_CHAMP_REQUEST, FETCH_CLASS_ITALIA_REQUEST, FETCH_CALEND_EUROPE_REQUEST, FETCH_CALEND_CHAMP_REQUEST, FETCH_CALEND_ITALIA_REQUEST} from "../types";

export const addMagic = (score) => {
    return {
        type: ADD_MAGIC,
        payload: score
    }
};

export const calculateScore = () => {
    return {
        type: CALCULATE_SCORE,
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

export const fetchCalendEurope = () => {
    return {
        type: FETCH_CALEND_EUROPE_REQUEST,
    }
};

export const fetchCalendChampions = () => {
    return {
        type: FETCH_CALEND_CHAMP_REQUEST,
    }
};

export const fetchCalendItalia = () => {
    return {
        type: FETCH_CALEND_ITALIA_REQUEST,
    }
};

export const setUrlParam = (param) => {
    return {
        type: SET_URL_PARAM,
        payload: param
    }
};
