import {
    AUTHENTICATE_PENDING,
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
export function authenticateFailed() {
    return {
        type: AUTHENTICATE_FAILED
    };
}

/**
 * @param token
 * @param userData
 * @returns {{type: string, token: *}}
 */
export const authenticateSuccess = (token) => ({
    type: AUTHENTICATE_SUCCESS,
    token
});