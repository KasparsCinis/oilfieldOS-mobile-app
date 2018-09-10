
const oilfieldos_main = 'http://oilfieldos.local';

function checkJson(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }

    try {
        let response = (JSON.parse(response));
    } catch (e) {
        throw Error(response.statusText);
    }

    return response;
}
//
export const loginQuery = (username, password) => {
    return fetch(`${oilfieldos_main}/user-api/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });
};