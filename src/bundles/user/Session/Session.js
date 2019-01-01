import history from "../../../components/history";
import {fetchUserData, fetchUserCompanyData, updateUserActiveProject} from "./Session.service";
import {
    sessionFailed,
    sessionSuccess,
    sessionLogout
} from "./Session.actions";
import {activateLoader, disableLoader} from "../../common/Loader/Loader.container";

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

        activateLoader();

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
                        userData.projects       = response.projects;

                        store.dispatch(sessionSuccess(userData));

                        disableLoader();

                        history.push('/dashboard');
                    })
                    .catch(error => {
                        store.dispatch(sessionFailed());

                        disableLoader();

                        console.error('Error:', error);
                    });

            })
            .catch(error => {
                store.dispatch(sessionFailed());

                disableLoader();

                console.error('Error:', error)
            });

    }

    /**
     * Gets current user from the session
     * returns null if no user currently logged in
     * @returns {*}
     */
    static getCurrentUser() {
        if (store === undefined) {
            return null;
        }

        if (store.getState().session.isAuthorized) {
            return store.getState().session.user;
        }

        return null;
    }

    /**
     *
     * @returns {*}
     */
    static getActiveProject() {
        let user = this.getCurrentUser();

        /**
         * Return default empty project
         */
        if (user == null) {
            return {
                id: null,
                name: ''
            };
        }

        return user.projects[user.activeWell];
    }

    static setActiveProject(project) {
        let user = this.getCurrentUser();

        /**
         * @todo
         * Check if the passed project is actually valid / user has access to it
         */


        updateUserActiveProject(project)
            .then(response => response.json())
            .then(response => {

                user.permission = response.permissions;
                user.activeWell = project;

                store.dispatch(sessionSuccess(user));

                /**
                 * Redirect to dashboard because any loaded components need reloading after a project is changed
                 */
                history.push('/dashboard');
            })
            .catch(error => {
                console.error('Error:', error)
            });
    }

    static setActiveCompany(company) {
        let user = this.getCurrentUser();
        let domain = user.companies[company].url;

        fetchUserCompanyData(Session.getToken(), domain)
            .then(response => response.json())
            .then(response => {
                user.permissions = response.permissions;
                user.activeWell  = response.activeWell;
                user.projects       = response.projects;

                store.dispatch(sessionSuccess(user));

                disableLoader();

                history.push('/dashboard');
            })
            .catch(error => {
                store.dispatch(sessionFailed());

                disableLoader();

                console.error('Error:', error);
            });
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

        if (user === undefined || user == null || company == null) {
            return false;
        }

        if (company.account === 'A' || company.account === 'S') {
            return true;
        }


        return Boolean(user.permissions[permission]);
    }

    /**
     * @returns {string}
     */
    static getCurrentDomain() {
        let company = this.getCurrentCompany();

        if (company == null) {
            return '';
        }

        return String(company.url);
    }

    /**
     * Returns authentication token for services
     * @returns {string | null}
     */
    static getToken() {
        return localStorage.getItem('token');
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

