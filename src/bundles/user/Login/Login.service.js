import { config } from '../../../config';

export const loginQuery = (username, password) => {
    return fetch(`${config.main_domain_url}/user-api/login`, {
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