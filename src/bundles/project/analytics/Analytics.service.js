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
export const fetchDepthChartData = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/analytics/operations-depth-chart`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};
export const fetchProductiveNptChartData = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/analytics/operations-productive-npt-chart`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};
export const fetchProductiveNptRatioChartData = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/analytics/operations-productive-npt-ratio-chart`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};
export const fetchRopChartData = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/analytics/operations-rop-chart`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};
export const fetchNptCategoryChartData = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/analytics/operations-npt-category-chart`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};
export const fetchIltCategoryChartData = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/analytics/operations-ilt-category-chart`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};

export const fetchCostDailyChartData = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/analytics/costs-daily-chart`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};
export const fetchCostWeeklyChartData = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/analytics/costs-weekly-chart`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};
export const fetchCostVendorChartData = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/analytics/costs-vendor-chart`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};
export const fetchCostPhaseChartData = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/analytics/costs-phase-chart`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};

export const fetchActionsChartData = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/analytics/actions-chart`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};


export const fetchHseChartData = () => {
    return fetch(`${config.http_protocol}${Session.getCurrentDomain()}/api/analytics/hse-chart`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        })
    });
};