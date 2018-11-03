import { config } from '../../../config';
import Session from "../../user/Session/Session";

export const fetchDailyCostValue = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/dashboard/daily-cost-value`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};
export const fetchTotalCostValue = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/dashboard/total-cost-value`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};
export const fetchUserNotifications = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/user/notifications`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};
export const fetchUserTodos = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/user/todos`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};