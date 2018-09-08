import {
    AUTHENTICATE_PENDING,
    AUTHENTICATE_LOGOUT
} from '../../actions/userActionsConstants'

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
 *
 * @type {{type: string}}
 */
export const authenticateLogout = ({
    type: AUTHENTICATE_LOGOUT
});