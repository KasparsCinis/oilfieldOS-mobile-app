import { config } from '../../../config';

export const fetchUserData = (token) => {
    return fetch(`${config.main_domain_url}/user-api/user-data`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        })
    });
};
export const fetchUserCompanyData = (token, domain) => {
    return fetch(`${config.http_protocol}${domain}/api/user/user-data`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        })
    });

};