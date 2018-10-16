import { config } from '../../../config';
import Session from "../../user/Session/Session";

export const fetchGanttChartData = (startDate, endDate) => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/lookahead/gantt-data`, {
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
export const fetchPobData = (startDate, endDate) => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/lookahead/pob-data`, {
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
export const fetchTransportData = (startDate, endDate, numberOfDays) => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/lookahead/transport-data`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        }),
        body: JSON.stringify({
            startDate: startDate,
            endDate: endDate,
            numberOfDays: numberOfDays
        })
    });
};
export const fetchFlights = (startDate, endDate, numberOfDays) => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/lookahead/flights`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        }),
        body: JSON.stringify({
            startDate: startDate,
            endDate: endDate,
            numberOfDays: numberOfDays
        })
    });
};