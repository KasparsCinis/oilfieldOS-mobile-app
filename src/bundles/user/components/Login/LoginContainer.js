import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Heading, Input, Button, Card } from 'rebass';
import { connect } from 'react-redux';
import { authenticate } from '../../actions/userActions';

import Login from './Login'

class LoginContainer extends Component {
    static propTypes = {
        authenticate: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        console.log(1231);

        this.loginSubmit = this.loginSubmit.bind(this);
    }


}

const mapStateToProps = (state, ownProps) => ({
    username: "TEST"
})

const loginSubmit = (dispatch) => ({
    authenticate: formData => dispatch(authenticate({
        'username': formData.username,
        'password': formData.password
    }))
})

export default connect( mapStateToProps, loginSubmit )(Login);
//export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);