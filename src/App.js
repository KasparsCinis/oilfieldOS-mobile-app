import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import layoutRoutes from "./layouts/index.js";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import Dashboard from "./bundles/user/Dashboard/Dashboard";
import NotFound from "./bundles/common/components/NotFound/NotFound";
import Loader from "./bundles/common/components/Loader/Loader";
import Login from "./bundles/user/Login/Login";
import history from './components/history';

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

const mapStateToProps = (state, ownProps) => ({
    isLoading: state.isLoading
})

const App = ({ classes, store, isLoading })  => (
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    {layoutRoutes.map((prop, key) => {
                        return <Route path={prop.path} component={prop.component} key={key} />;
                    })}
                </Switch>
            </Router>
        </Provider>
        <Loader store={store}/>
    </MuiThemeProvider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
}

export default connect( mapStateToProps )(App);