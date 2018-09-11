import {
    SESSION_LOADING,
    SESSION_FAILED,
    SESSION_SUCCESS
} from './Session.constants'

const initialState = {
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
                isLoading: true,
            };
        case SESSION_FAILED:
            return {
                ...state,
                isLoading: false,
                loggedIn: false
            };
        case SESSION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loggedIn: true,
                user: action.userData
            };
        default:
            return state;
    }
}

export default session