import React from 'react';
import Header from './Header.component';
import Session from "../../../bundles/user/Session/Session";
import {connect} from "react-redux";

class HeaderContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            shouldShow: true,
            openProjectDialog: false,
            profileAnchorEl: null,
            projectAnchorEl: null
        };

        this.lastScroll = null;

        this.handleScroll = this.handleScroll.bind(this);
        this.handleProfileMenu = this.handleProfileMenu.bind(this);
        this.handleProjectMenu = this.handleProjectMenu.bind(this);
        this.handleProjectDialog = this.handleProjectDialog.bind(this);
        this.handleProjectChange = this.handleProjectChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    }

    handleProfileMenu = event => {
        this.setState({ profileAnchorEl: event.currentTarget });
    };

    handleProjectMenu = event => {
        if (Object.keys(Session.getCurrentUser().projects).length > 1) {
            this.setState({projectAnchorEl: event.currentTarget});
        }
    };

    handleProjectDialog = () => {
        this.setState({
            projectAnchorEl: null,
            openProjectDialog: true
        });
    };

    handleProjectChange(toProject) {
        Session.setActiveProject(toProject);

        this.setState({
            profileAnchorEl: null,
            projectAnchorEl: null,
            openProjectDialog: false
        });
    }

    handleClose = () => {
        this.setState(prevState => ({
            ...prevState,
            profileAnchorEl: null,
            projectAnchorEl: null,
            openProjectDialog: false
        }));
    };

    handleLogout = () => {
        this.setState({ profileAnchorEl: null });

        Session.logout();
    };

    handleScroll(event) {
        if (event.target.id !== "main-layout-panel") {
            return;
        }

        const lastScroll = event.target.scrollTop;

        if (lastScroll === this.lastScroll) {
            return;
        }

        const shouldShow = (lastScroll < this.lastScroll || lastScroll < 70);
;
        if (shouldShow !== this.state.shouldShow) {
            this.setState((prevState, props) => ({
                ...prevState,
                shouldShow,
            }));
        }

        this.lastScroll = lastScroll;
    }

    render() {
        const { projects, ...rest } = this.props;

        return (
            <Header
                isShown={this.state.shouldShow}
                openProjectDialog={this.state.openProjectDialog}
                handleProfileMenu={this.handleProfileMenu}
                handleProjectMenu={this.handleProjectMenu}
                handleProjectDialog={this.handleProjectDialog}
                handleClose={this.handleClose}
                handleLogout={this.handleLogout}
                handleProjectChange={this.handleProjectChange}
                profileAnchorEl={this.state.profileAnchorEl}
                projectAnchorEl={this.state.projectAnchorEl}
                projects={projects}
                {...rest}
            >
            </Header>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    projects: state.session.user.projects,
});

export default connect( mapStateToProps )(HeaderContainer);