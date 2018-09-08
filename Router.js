import React from 'react';
import { Route } from 'react-router';

import Dashboard from './bundles/user/components/Dashboard/Dashboard';
import Login from './bundles/user/components/Login/Login';
import NotFound from './bundles/common/components/NotFound/NotFound';
import Provider from "react-redux/es/components/Provider";
import {BrowserRouter as Router} from "react-router-dom";

const checkAuth = (nextState, replace, callback) => {
    const token = localStorage.getItem('OILFIELDOS_TOKEN');
    const nextLoc = nextState.location.pathname;

    if (!token && nextLoc !== '/login') replace('/login');
    if (token && (nextLoc === '/login' || nextLoc === '/')) replace('/dashboard');
    return callback();
};

const router = ({ store })  => (
    <Provider store={store}>
        <Router>
            <Route path="/" onEnter={checkAuth} component={Login}>
                <Route path="dashboard" component={Dashboard} />
            </Route>
            <Route path="/login" exact component={Login} />
        </Router>
        <Router>
            <Route path="*" component={NotFound} />
        </Router>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
}


export default router;