import {
    SESSION_LOADING,
    SESSION_FAILED,
    SESSION_SUCCESS
} from './Session.constants'

const initialState = {
    isAuthorized: false,
    user: {
        firstName:'',
        lastName:'',
        email:'',
        activeCompany: null,
        companies: [],
        permissions: [],
    }
};

const session = (state = initialState, action) => {
    switch (action.type) {
        case SESSION_LOADING:
            return {
                ...state,
            };
        case SESSION_FAILED:
            return {
                ...state,
                isAuthorized: false,
                user: initialState.user
            };
        case SESSION_SUCCESS:
            return {
                ...state,
                isAuthorized: true,
                user: action.user,
            };
        default:
            return state;
    }
}

export default session