import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar.component';
import Session from "../../../bundles/user/Session/Session";
import sidebarStyle from "./Sidebar.style";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";

class SidebarContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openSidebarModules: {},
            openMobileProfileTab: false
        };

        this.handleModuleClick = this.handleModuleClick.bind(this);
        this.handleMobileTabToggle = this.handleMobileTabToggle.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleModuleClick(collapseKey) {
        let newState = Object.assign({}, this.state);

        newState.openSidebarModules[collapseKey] = newState.openSidebarModules[collapseKey] ? !newState.openSidebarModules[collapseKey] : true;

        this.setState(newState);
    }

    handleMobileTabToggle() {
        this.setState({
            openMobileProfileTab: !this.state.openMobileProfileTab
        })
    }

    handleLogout() {
        Session.logout();
    }

    render() {
        const { logo, ...rest } = this.props;

        return (
            <Sidebar
                logo={logo}
                collapseOpen={this.state.openSidebarModules}
                openMobileProfileTab={this.state.openMobileProfileTab}
                handleModuleClick={this.handleModuleClick}
                handleMobileTabToggle={this.handleMobileTabToggle}
                handleLogout={this.handleLogout}
                {...rest}
            >
            </Sidebar>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    logo: Session.getCurrentCompany() ? Session.getCurrentCompany().logo : '',
    name: Session.getCurrentUser() ? Session.getCurrentUser().name : '',
    email: Session.getCurrentUser() ? Session.getCurrentUser().email : '',
});

export default connect( mapStateToProps )(SidebarContainer);