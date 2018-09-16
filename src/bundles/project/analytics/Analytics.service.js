import { config } from '../../../config';
import Session from "../../user/Session/Session";

export const fetchTimeChartData = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/analytics/operations-time-chart`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};