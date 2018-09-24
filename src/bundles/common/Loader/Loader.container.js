import React, {Component} from "react";
import { connect } from 'react-redux';
import Loader from './Loader';
import history from "../../../components/history";
import Session from "../../user/Session/Session";
import { store } from '../../../index';
import {turnOffLoader, turnOnLoader} from "./Loader.actions";

class LoaderContainer extends Component {

    constructor(props) {
        super(props);

        /**
         * If the user has logged in redirect to dashboard
         */
        if (Session.getCurrentUser() != null) {
            history.push('/dashboard');
        }
    }

    render() {
        const { isLoading } = this.props;

        return <Loader
            isLoading={isLoading}
        />
    }
}

const mapStateToProps = (state, ownProps) => ({
    isLoading: state.loader.loading
});

export default connect( mapStateToProps )(LoaderContainer);

export function activateLoader() {
    store.dispatch(turnOnLoader());
}
export function disableLoader() {
    store.dispatch(turnOffLoader());
}