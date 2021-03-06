import React from 'react';
import Sidebar from './Sidebar.component';
import Session from "../../../../bundles/user/Session/Session";
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
        const { logo, showChangeCompanyButton, ...rest } = this.props;

        return (
            <Sidebar
                logo={logo}
                collapseOpen={this.state.openSidebarModules}
                openMobileProfileTab={this.state.openMobileProfileTab}
                showChangeCompanyButton={showChangeCompanyButton}
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
    user: state.session.user,
    showChangeCompanyButton: Object.keys(state.session.user.companies).length > 1
});

export default connect( mapStateToProps )(SidebarContainer);