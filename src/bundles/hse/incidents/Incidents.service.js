import { config } from '../../../config';
import Session from "../../user/Session/Session";

export const fetchIncidents = (startDate, endDate) => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/hse/incidents/index`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        }),
        body: JSON.stringify({
            startDate: startDate,
            endDate: endDate
        })
    });
};