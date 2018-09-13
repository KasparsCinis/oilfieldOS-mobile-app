import React from 'react';
import PropTypes from 'prop-types'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import layoutRoutes from "./layouts/index.js";
import green from '@material-ui/core/colors/green';

import Loader from "./bundles/common/Loader/Loader.container";
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