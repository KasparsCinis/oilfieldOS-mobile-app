import { config } from '../../../config';
import Session from "../../user/Session/Session";

export const fetchGanttChartData = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};