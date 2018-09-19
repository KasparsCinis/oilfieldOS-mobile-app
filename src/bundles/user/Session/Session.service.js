import { config } from '../../../config';
import Session from "./Session";

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
export const updateUserActiveProject = (projectId) => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/user/update-active-project`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        }),
        body: JSON.stringify({
            projectId: projectId,
        })
    });
};