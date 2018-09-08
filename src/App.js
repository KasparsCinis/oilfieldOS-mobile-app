import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import LoginContainer from "./bundles/user/components/Login/Login.container";
import Dashboard from "./bundles/user/components/Dashboard/Dashboard";
import NotFound from "./bundles/common/components/NotFound/NotFound";

const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});

const checkAuth = (nextState, replace, callback) => {
    console.log('...');
    const token = localStorage.getItem('OILFIELDOS_TOKEN');
    const nextLoc = nextState.location.pathname;

    if (!token && nextLoc !== '/login') replace('/login');
    if (token && (nextLoc === '/login' || nextLoc === '/')) replace('/dashboard');

    return callback();
};

const App = ({ classes, store })  => (
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginContainer}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/login" component={LoginContainer} />
                    <Route exact path="*" component={NotFound} />
                </Switch>
            </Router>
        </Provider>
    </MuiThemeProvider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
}

export default App;