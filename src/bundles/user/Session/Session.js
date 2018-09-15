import history from "../../../components/history";
import {fetchUserData, fetchUserCompanyData} from "./Session.service";
import {
    sessionFailed,
    sessionLoading,
    sessionSuccess,
    sessionLogout
} from "./Session.actions";

let store;

export default class Session {
    /**
     * Saves global redux store so it is accessible later on
     * @param reduxStore
     */
    static connectStore(reduxStore) {
        store = reduxStore;
    }

    static fetchUserDataIfTokenExists() {
        let token = localStorage.getItem('token');

        if (token == null || token === undefined) {
            return false;
        }

        /**
         * Fetch user data
         */
        fetchUserData(token)
            .then(response => response.json())
            .then(response => {

                let userData = response.userData;
                let domain = response.userData.companies[response.userData.activeCompany].url;

                /**
                 * Fetch the user company data (permissions / projects) because it is on a separate domain (with different DB),
                 * so it has to be a separate API call
                 */
                fetchUserCompanyData(token, domain)
                    .then(response => response.json())
                    .then(response => {
                        userData.name = userData.firstName + ' ' + userData.lastName;
                        userData.permissions = response.permissions;
                        userData.activeWell  = response.activeWell;
                        userData.wells       = response.wells;

                        store.dispatch(sessionSuccess(userData));

                        history.push('/dashboard');
                    })
                    .catch(error => {
                        store.dispatch(sessionFailed());

                        console.error('Error:', error)
                    });

            })
            .catch(error => {
                store.dispatch(sessionFailed());

                console.error('Error:', error)
            });

    }

    /**
     * Gets current user from the session
     * returns null if no user currently logged in
     * @returns {*}
     */
    static getCurrentUser() {
        if (store.getState().session.isAuthorized) {
            return store.getState().session.user;
        }

        return null;
    }

    /**
     * @todo
     * @returns {null}
     */
    static getCurrentProject() {
        let user = this.getCurrentUser();

        if (user == null) {
            return null;
        }

    }

    /**
     * Returns current company
     * @returns {*}
     */
    static getCurrentCompany() {
        let user = this.getCurrentUser();

        if (user == null) {
            return null;
        }

        return user.companies[user.activeCompany];
    }

    /**
     * @param permission
     * @returns {boolean}
     */
    static hasPermission(permission) {
        let user = this.getCurrentUser();
        let company = this.getCurrentCompany();

        if (user == null || company == null) {
            return null;
        }

        if (company.role === 'A' || company.role === 'S') {
            return true;
        }

        return Boolean(user.permissions[permission]);
    }

    /**
     * @todo
     */
    static getCurrentDomain() {

    }

    /**
     * Logs out the current user and redirect to login page
     */
    static logout() {
        localStorage.removeItem('token');

        store.dispatch(sessionLogout());

        history.push('/user/login');
    }
}

