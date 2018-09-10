import React from "react";
import LoginContainer from "../bundles/user/components/Login/Login.container";
import {withRouter} from 'react-router';

class LoginLayout extends React.Component {

    render() {
        return (
            <LoginContainer></LoginContainer>
        );
    }

}

export default withRouter(LoginLayout);