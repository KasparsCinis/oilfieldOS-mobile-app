import React from "react";
import LoginContainer from "../bundles/user/Login/Login.container";
import ForgotPasswordContainer from "../bundles/user/ForgotPassword/ForgotPassword.container";
import { Switch, Route } from "react-router-dom";

class LoginLayout extends React.Component {

    render() {
        return (
            /*<Switch>
                <Route path='/user/login' component={LoginContainer} />
                <Route path='/user/forgot-password' component={ForgotPasswordContainer} />
            </Switch>*/
            <LoginContainer></LoginContainer>
        );
    }

}

export default LoginLayout;