import React from "react";
import { connect } from 'react-redux';
import Component from "../../../components/component";
import { activateLoader, disableLoader } from '../../common/Loader/Loader.container';
import Session from '../Session/Session';
import ProfileComponent from './Profile.component';
import history from "../../../components/history";

class ProfileContainer extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return <ProfileComponent

        />;
    }
}

const mapStateToProps = (state, ownProps) => ({
    error: ''
});


export default connect( mapStateToProps )(ProfileContainer);