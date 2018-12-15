import { config } from '../../config';
import Session from "../../bundles/user/Session/Session";

export const postIncident = (date, details, headline, type) => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/hse/incidents/create`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        }),
        body: JSON.stringify({
            'Incident': {
                'date': date,
                'details': details,
                'headline': headline,
                'type': type
            },
            'Incident[date]': date,
            'Incident[details]': details,
            'Incident[headline]': headline,
            'Incident[type]': type
        })
    });
};
export const getIncident = (id) => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/hse/incidents/get`, {
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