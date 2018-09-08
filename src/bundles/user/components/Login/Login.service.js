
const oilfieldos_main = 'oilfieldos.local';

export const loginQuery = (username, password) => {
    let data;

    return fetch(`${oilfieldos_main}/user-api/login`, {
        username: username,
        password: password
    })
        .then(response => {console.log(response);response.json()})
};