import {
    MODAL_OPEN,
    MODAL_CLOSED,
} from './Modal.constants'

/**
 * @param modal
 * @returns {{type: string, open: boolean, modal: *}}
 */
export function openModal(modal) {
    return {
        type: MODAL_OPEN,
        open: true,
        modal: modal
    };
}

/**
 * @returns {{type: string, open: boolean}}
 */
export function closeModal() {
    return {
        type: MODAL_CLOSED,
        open: false,
    };
}