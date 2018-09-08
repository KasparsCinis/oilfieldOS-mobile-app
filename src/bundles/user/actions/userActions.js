import {
    AUTHENTICATE_PENDING,
    AUTHENTICATE_LOGOUT
} from './userActionsConstants'

/**
 *
 * @param {object} formData
 * @param {string} formData.username
 * @param {string} formData.password
 */
export const authenticateRequest = formData => ({
    type: AUTHENTICATE_PENDING,
    formData
});

/**
 *
 * @type {{type: string}}
 */
export const authenticateLogout = ({
    type: AUTHENTICATE_LOGOUT
});