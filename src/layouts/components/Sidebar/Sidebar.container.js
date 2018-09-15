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
            openSidebarModules: {2:false},
        };

        this.handleModuleClick = this.handleModuleClick.bind(this);
    }

    componentDidMount() {

        this.setState({
            openSidebarModules: {2:false},
        });
    }

    handleModuleClick(collapseKey) {
        let newState = Object.assign({}, this.state);

        newState.openSidebarModules[collapseKey] = newState.openSidebarModules[collapseKey] ? !newState.openSidebarModules[collapseKey] : true;

        this.setState(newState);
    }

    render() {
        const { logo, ...rest } = this.props;

        return (
            <Sidebar
                logo={logo}
                collapseOpen={this.state.openSidebarModules}
                handleModuleClick={this.handleModuleClick}
                {...rest}
            >
            </Sidebar>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    logo: Session.getCurrentCompany() ? Session.getCurrentCompany().logo : '',
});

export default connect( mapStateToProps )(SidebarContainer);