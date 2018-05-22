export const fetchTeams = () => {
    const API_ENDPOINT = "http://localhost:3000/teams";

    return fetch(API_ENDPOINT)
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