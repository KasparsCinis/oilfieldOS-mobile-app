import { config } from '../../../config';

export const fetchUserData = (token) => {
    return fetch(`${config.main_domain_url}/user-api/user-data`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });
};
export const fetchUserPermissions = (token, domain) => {
    return fetch(`${domain}/user-api/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
};