import {
    AUTHENTICATE_PENDING,
    AUTHENTICATE_FAILED,
    AUTHENTICATE_SUCCESS,
    AUTHENTICATE_LOGOUT
} from './Login.constants'

/**
 * Default user object before any authentication
 * @type {{formState: {username: string, password: string}, error: string, currentlySending: boolean, loggedIn: boolean, data: {}}}
 */
let initialState = {
    error: '',
    currentlySending: false,
    loggedIn: false,
    isLoading: false,
    user: {
        firstName:'',
        lastName:'',
        email:'',
        permissions: [],
    },
    company: {}
};

const user = (state = initialState, action) => {

    switch (action.type) {
        case AUTHENTICATE_PENDING:
            return {
                ...state,
                isLoading: true,
                loggedIn: false
            };
        case AUTHENTICATE_FAILED:
            return {
                ...state,
                isLoading: false,
                loggedIn: false
            };
        case AUTHENTICATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loggedIn: true,
                user: {
                    firstName: action.firstName,
                    lastName: action.lastName,
                    email: action.email,
                }
            };
        case AUTHENTICATE_LOGOUT:
            /**
             * Reset all the user state data on logout
             */

            return {
                ...state,
                isLoading: false,
                loggedIn: false,
                user: {},
                company: []
            };
        default:
            return state;
    }
}

export default user