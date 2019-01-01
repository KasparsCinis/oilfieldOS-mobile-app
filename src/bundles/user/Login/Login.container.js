import React, {Component} from "react";
import { connect } from 'react-redux';
import {
    authenticateRequest,
    authenticateFailed,
    authenticateSuccess
} from './Login.actions'
import { loginQuery } from './Login.service';
import { activateLoader, disableLoader } from '../../common/Loader/Loader.container';
import LoginComponent from './Login.component'
import Session from '../Session/Session';
import history from "../../../components/history";

let errorMessage = "";

class LoginContainer extends Component {

    constructor(props) {
        super(props);

        /**
         * If the user has logged in redirect to dashboard
         */
        if (Session.getCurrentUser() != null) {
            history.push('/dashboard');
        }
    }

    render() {
        return <LoginComponent
            error={this.props.error}
            authenticate={this.props.authenticate}
        />;
    }
}

const mapStateToProps = (state, ownProps) => ({
    error: errorMessage
});

const loginSubmit = (dispatch) => ({

    authenticate: (username, password) => {
        dispatch(authenticateRequest(
            username,
            password
        ));

        activateLoader();

        loginQuery(username, password)
            .then(response => response.json())
            .then(response => {

                if (response.status === 'error') {
                    errorMessage = response.message;

                    disableLoader();

                    dispatch(authenticateFailed());
                }
                else if (response.status === 'success') {
                    errorMessage = "";

                    localStorage.setItem('token', response.token);

                    disableLoader();

                    dispatch(authenticateSuccess(response.token));

                    Session.fetchUserDataIfTokenExists(dispatch);
                } else {
                    errorMessage = "Something went wrong";

                    disableLoader();
                }

            })
            .catch(error => {
                disableLoader();

                console.error('Error:', error)
            });
    }
});

export default connect( mapStateToProps, loginSubmit )(LoginContainer);