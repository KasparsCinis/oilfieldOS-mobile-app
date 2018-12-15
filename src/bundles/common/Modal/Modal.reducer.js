import {
    MODAL_OPEN,
    MODAL_CLOSED,
} from './Modal.constants'

/**
 * @type {{modal: null, open: boolean}}
 */
let initialState = {
    modal: null,
    open: false
};

const modal = (state = initialState, action) => {

    switch (action.type) {
        case MODAL_OPEN:
            return {
                ...state,
                modal: action.modal,
                open: action.open,
                config: action.config
            };
        case MODAL_CLOSED:
            return {
                ...state,
                modal: null,
                open: action.open
            };
        default:
            return state;
    }
};

export default modal