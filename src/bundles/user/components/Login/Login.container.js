import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    authenticateRequest,
    authenticateLogout,
    authenticateFailed,
    authenticateSuccess
} from './Login.actions'
import { loginQuery } from './Login.service';
import history from '../../../../components/history';
import Login from './Login'

let errorMessage = "";

class LoginContainer extends Component {

    static propTypes = {
        authenticate: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.loginSubmit = this.loginSubmit.bind(this);
    }

    componentWillMount() {
        this.props.history.push('/');
    }

}

const mapStateToProps = (state, ownProps) => ({
    error: errorMessage
})

const loginSubmit = (dispatch) => ({
    authenticate: (username, password) => {
        dispatch(authenticateRequest(
            username,
            password
        ));

        loginQuery(username, password)
            .then(response => response.json())
            .then(response => {

                if (response.status == 'error') {
                    errorMessage = response.message;

                    dispatch(authenticateFailed());
                }
                else if (response.status == 'success') {
                    errorMessage = "";

                    dispatch(authenticateSuccess(response.token, response.userData));

                    //this.props.history.push("/dashboard");
                    //history.push('/dashboard');
                    history.push(`/dashboard`)
                } else {
                    errorMessage = "";

                    /**
                     * Unknown state, reset to default login form
                     */
                    dispatch(authenticateLogout());
                }

            })
            .catch(error => {
                dispatch(authenticateLogout());

                console.error('Error:', error)
            });
    }
})

export default withRouter(connect( mapStateToProps, loginSubmit )(Login));