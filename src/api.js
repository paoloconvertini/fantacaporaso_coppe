const CLASSIFICA_CHAMPIONS_ENDPOINT = process.env.REACT_APP_CHAMPIONS_ENDPOINT;
const CLASSIFICA_COPPA_ITALIA_ENDPOINT = process.env.REACT_APP_COPPA_ITALIA_ENDPOINT;
const CLASSIFICA_EUROPE_LEAGUE_ENDPOINT = process.env.REACT_APP_EUROPE_LEAGUE_ENDPOINT;
const CAL_CHAMPIONS_ENDPOINT = process.env.REACT_APP_CAL_CHAMPIONS_ENDPOINT;
const CAL_COPPA_ITALIA_ENDPOINT = process.env.REACT_APP_CAL_COPPA_ITALIA_ENDPOINT;
const CAL_EUROPE_LEAGUE_ENDPOINT = process.env.REACT_APP_CAL_EUROPE_LEAGUE_ENDPOINT;

export const fetchClassificaCoppaItaliaApi = () => {
    return fetch(CLASSIFICA_COPPA_ITALIA_ENDPOINT)
    .then(response => {
        return response.json();
    })
};

export const fetchClassificaChampionsApi = () => {
    return fetch(CLASSIFICA_CHAMPIONS_ENDPOINT)
    .then(response => {
        return response.json();
    })
};

export const fetchClassificaEuropeApi = () => {
    return fetch(CLASSIFICA_EUROPE_LEAGUE_ENDPOINT)
    .then(response => {
        return response.json();
    })
};

export const fetchCalendCoppaItaliaApi = () => {
    return fetch(CAL_COPPA_ITALIA_ENDPOINT)
    .then(response => {
        return response.json();
    })
};

export const fetchCalendChampionsApi = () => {
    return fetch(CAL_CHAMPIONS_ENDPOINT)
    .then(response => {
        return response.json();
    })
};

export const fetchCalendEuropeApi = () => {
    return fetch(CAL_EUROPE_LEAGUE_ENDPOINT)
    .then(response => {
        return response.json();
    })
};