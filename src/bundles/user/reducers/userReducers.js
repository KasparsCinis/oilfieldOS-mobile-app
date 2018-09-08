import {
    AUTHENTICATE,
    AUTHENTICATE_FAILED,
    AUTHENTICATE_SUCCESS,
    AUTHENTICATE_PENDING,
} from '../actions/userActionsConstants'

/**
 * Default user object before any authentication
 * @type {{formState: {username: string, password: string}, error: string, currentlySending: boolean, loggedIn: boolean, data: {}}}
 */
let initialState = {
    formState: {
        username: '',
        password: ''
    },
    error: '',
    currentlySending: false,
    loggedIn: false,
    data: {}
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            console.log('AUTHENTICATE');

            return {
                ...state,
                currentlySending: true,
                loggedIn: false
            };
        case AUTHENTICATE_FAILED:
            return state;
        case AUTHENTICATE_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                currentlySending: false,
                loggedIn: true,
                data: action.payload
            };
        case AUTHENTICATE_PENDING:
            return state;
        default:
            return state;
    }
}

export default user