import { Component as reduxComponent } from 'react';
import history from "./history";
import Session from "../bundles/user/Session/Session";

class Component extends reduxComponent {

    constructor(props) {
        super(props);


        /**
         * If the user hasn't logged in / or the logged in sate is 'broken' redirect the user to login page
         */
        if (Session.getCurrentUser() == null) {
            history.push('/user/login');
        }
    }

    /**
     * Check if user has given permission, or redirect to dashboard
     */
    validatePermission(permission) {
        if (!Session.hasPermission(permission)) {
            history.push('/dashboard');
        }
    }

}

export default Component;