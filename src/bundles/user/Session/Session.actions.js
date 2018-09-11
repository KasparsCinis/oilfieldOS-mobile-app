import {
    SESSION_LOADING,
    SESSION_FAILED,
    SESSION_SUCCESS
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
 * @param token
 * @param userData
 * @returns {{type: string, token: *, userData: *}}
 */
export const sessionSuccess = (token, userData) => ({
    type: SESSION_SUCCESS,
    token,
    userData
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