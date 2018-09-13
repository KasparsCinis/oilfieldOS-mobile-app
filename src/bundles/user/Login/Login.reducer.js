import {
    AUTHENTICATE_PENDING,
    AUTHENTICATE_FAILED,
    AUTHENTICATE_SUCCESS,
} from './Login.constants'

/**
 * Default user object before any authentication
 * @type {{currentlySending: boolean, loggedIn: boolean, isLoading: boolean, user: {firstName: string, lastName: string, email: string, activeCompany: null, companies: Array, permissions: Array}}}
 */
let initialState = {
    loggedIn: false,
};

const login = (state = initialState, action) => {

    switch (action.type) {
        case AUTHENTICATE_PENDING:
            return {
                ...state,
                loggedIn: false
            };
        case AUTHENTICATE_FAILED:
            return {
                ...state,
                loggedIn: false
            };
        case AUTHENTICATE_SUCCESS:
            return {
                ...state,
                loggedIn: true
            };
        default:
            return state;
    }
}

export default login