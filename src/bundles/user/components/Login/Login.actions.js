import {
    AUTHENTICATE_PENDING,
    AUTHENTICATE_LOGOUT,
    AUTHENTICATE_FAILED,
    AUTHENTICATE_SUCCESS
} from './Login.constants'

/**
 * Tries to login the user
 * @param username
 * @param password
 * @returns {{type: string, username: *, password: *}}
 */
export const authenticateRequest = (username, password) => ({
    type: AUTHENTICATE_PENDING,
    username,
    password
});

/**
 * @type {{type: string}}
 */
export function authenticateLogout() {
    return {
        type: AUTHENTICATE_LOGOUT
    };
}

/**
 * @type {{type: string}}
 */
export function authenticateFailed() {
    return {
        type: AUTHENTICATE_FAILED
    };
}

/**
 * @param token
 * @param userData
 * @returns {{type: string, token: *, userData: *}}
 */
export const authenticateSuccess = (token, userData) => ({
    type: AUTHENTICATE_SUCCESS,
    token,
    userData
});