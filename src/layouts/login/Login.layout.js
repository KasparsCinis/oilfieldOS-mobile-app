import React from "react";
import LoginContainer from "../../bundles/user/Login/Login.container";
import { Switch, Route } from "react-router-dom";

class LoginLayout extends React.Component {

    render() {
        return (
            <Switch>
                <Route path='/user/login' component={LoginContainer} />
            </Switch>
        );
    }

}

export default LoginLayout;