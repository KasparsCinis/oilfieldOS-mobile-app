import React, {Component} from "react";
import {sessionLoading, sessionSuccess, sessionFailed} from "./Session.actions";
import history from "../../../components/history";
import {fetchUserData, fetchUserPermissions} from "./Session.service";


export default class Session {
    static fetchUserDataIfTokenExists(dispatch) {
        let token = localStorage.getItem('token');

        if (token === null) {
            return false;
        }


        console.log(token);
        dispatch(sessionLoading(token));

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
        //history.push(`/`);
    }
}

