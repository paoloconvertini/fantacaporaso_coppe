const TEAMS_ENDPOINT = process.env.REACT_APP_TEAMS_ENDPOINT;
const CLASSIFICA_CHAMPIONS_ENDPOINT = process.env.REACT_APP_CHAMPIONS_ENDPOINT;
const CLASSIFICA_COPPA_ITALIA_ENDPOINT = process.env.REACT_APP_COPPA_ITALIA_ENDPOINT;
const CLASSIFICA_EUROPE_LEAGUE_ENDPOINT = process.env.REACT_APP_EUROPE_LEAGUE_ENDPOINT;

export const fetchTeamsApi = () => {

    return fetch(TEAMS_ENDPOINT)
    .then(response => {
        return response.json();
    })
    .then(json => {
        return json.map(({id, squadra, allenatore}) => ({
            id,
            squadra,
            allenatore
        }));
    });
};

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