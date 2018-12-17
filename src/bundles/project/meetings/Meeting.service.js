import { config } from '../../../config';
import Session from "../../user/Session/Session";

export const fetchMeetings = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/project/meeting/index`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        }),
    });
};