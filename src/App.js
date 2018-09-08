import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';

import LoginContainer from "./bundles/user/components/Login/LoginContainer";
import Dashboard from "./bundles/user/components/Dashboard/Dashboard";
import NotFound from "./bundles/common/components/NotFound/NotFound";

const checkAuth = (nextState, replace, callback) => {
    console.log('...');
    const token = localStorage.getItem('OILFIELDOS_TOKEN');
    const nextLoc = nextState.location.pathname;

    if (!token && nextLoc !== '/login') replace('/login');
    if (token && (nextLoc === '/login' || nextLoc === '/')) replace('/dashboard');

    return callback();
};

const App = ({ store })  => (
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={LoginContainer}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/login" component={LoginContainer} />
                    <Route exact path="*" component={NotFound} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
}

export default App;
