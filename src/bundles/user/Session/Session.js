import React from "react";
import history from "../../../components/history";
import {fetchUserData} from "./Session.service";

let store;

export default class Session extends React.PureComponent{
    /**
     * Saves global redux store so it is accessible later on
     * @param reduxStore
     */
    static connectStore(reduxStore) {
        store = reduxStore;
    }

    static fetchUserDataIfTokenExists() {
        let token = localStorage.getItem('token');

        if (token === null) {
            return false;
        }

        console.log(store.getState());

        /**
         * Fetch user data
         */
        fetchUserData(token)
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                //dispatch( );

                console.error('Error:', error)
            });

    }
}

