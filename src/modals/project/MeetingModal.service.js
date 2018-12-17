import { config } from '../../config';
import Session from "../../bundles/user/Session/Session";

export const getMeeting = (id) => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/project/meeting/get`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        }),
        body: JSON.stringify({
            'id': id,
        })
    });
};