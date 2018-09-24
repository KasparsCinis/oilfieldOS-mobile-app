import {
    LOADER_ON,
    LOADER_OFF,
} from './Loader.constants'

/**
 * @type {{type: string}}
 */
export function turnOnLoader() {
    return {
        type: LOADER_ON
    };
}

/**
 * @type {{type: string}}
 */
export function turnOffLoader() {
    return {
        type: LOADER_OFF
    };
}