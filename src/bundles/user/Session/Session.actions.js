import {
    SESSION_LOADING,
    SESSION_FAILED,
    SESSION_SUCCESS,
    SESSION_COMPANY_SUCCESS
} from './Session.constants'

/**
 * Fetches data about the user (user params, companies, permissions for current company)
 * @param token
 * @returns {{type: string, token: *}}
 */
export const sessionLoading = (token) => ({
    type: SESSION_LOADING,
    token
});

/**
 * Fetching user data succeeded
 * @param user
 * @returns {{type: string, user: *}}
 */
export const sessionSuccess = (user) => ({
    type: SESSION_SUCCESS,
    user
});

/**
 * Fetching user data failed
 * @type {{type: string}}
 */
export function sessionFailed() {
    return {
        type: SESSION_FAILED
    };
}