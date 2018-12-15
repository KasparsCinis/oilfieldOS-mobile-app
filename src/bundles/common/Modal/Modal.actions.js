import {
    MODAL_OPEN,
    MODAL_CLOSED,
} from './Modal.constants'

/**
 *
 * @param modal
 * @param config
 * @returns {{type: string, open: boolean, modal: *, config: *}}
 */
export function openModal(modal, config) {
    return {
        type: MODAL_OPEN,
        open: true,
        modal: modal,
        config: config
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