import {
    LOADER_ON,
    LOADER_OFF,
} from './Loader.constants'

/**
 * @type {{loading: boolean}}
 */
let initialState = {
    loading: false,
};

const loader = (state = initialState, action) => {

    switch (action.type) {
        case LOADER_ON:
            return {
                ...state,
                loading: true
            };
        case LOADER_OFF:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default loader