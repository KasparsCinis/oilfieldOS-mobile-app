import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

import HeaderContainer from "./components/Header/Header.container";
import Footer from "./components/Footer/Footer.component";
import Sidebar from "./components/Sidebar/Sidebar.container";

import NotFoundContainer from '../bundles/common/NotFound/NotFound';
import DashboardContainer from '../bundles/user/Dashboard/Dashboard.container';

import Component from "../components/component";
import {drawerWidth} from "./components/dashboard.style";
import Session from "../bundles/user/Session/Session";
import AnalyticsContainer from "../bundles/project/analytics/Analytics.container";
import LookaheadContainer from "../bundles/operations/lookahead/Lookahead.container";
import ProfileContainer from "../bundles/user/profile/Profile.container";

const layoutStyles = theme => ({
    wrapper: {
        position: "relative",
        top: "0",
        height: "100vh"
    },
    mainPanel: {
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        overflow: "auto",
        position: "relative",
        float: "right",
        transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        maxHeight: "100%",
        width: "100%",
        overflowScrolling: "touch",
        webkitOverflowScrolling: "touch",
        height: "100%"
    },
    content: {
        marginTop: "70px",
        padding: "30px 15px",
        minHeight: "calc(100vh - 123px)"
    },
    container: {
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto"
    },
    map: {
        marginTop: "70px",
        minHeight: "100%",
        padding: "10px",
        backgroundColor: "#fafafa",

        [theme.breakpoints.up("md")]: {
            padding: "20px",
        },
    }
});

const dashboardRoutes = [
    {
        path: "/dashboard",
        sidebarName: "Dashboard",
        icon: 'home',
        visible: true,
        component: DashboardContainer
    },
    {
        path: "/analytics",
        sidebarName: "Analytics",
        icon: 'bar_chart',
        permission: 'operations-view-analytics',
        visible: false,
        component: AnalyticsContainer
    },
    {
        sidebarName: "Operations",
        icon: 'show_chart',
        children: [
            {
                path: "/lookahead",
                sidebarName: "Lookahead",
                icon: 'compass_calibration',
                permission: '...',
                component: LookaheadContainer
            },
        ]
    },
];

const switchRoutes = (
    <Switch>
        <Route path='/dashboard' component={DashboardContainer} key={1} />
        <Route path='/analytics' component={AnalyticsContainer} key={2} />
        <Route path='/lookahead' component={LookaheadContainer} key={3} />
        <Route path='/profile' component={ProfileContainer} key={4} />
    </Switch>
);

class NormalLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false,
            isMobile: window.innerWidth < 960
        };
        this.resizeFunction = this.resizeFunction.bind(this);
    }
    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };
    resizeFunction() {
        if (window.innerWidth >= 960) {
            this.setState({
                mobileOpen: false,
                isMobile: false
            });
        } else {
            this.setState({
                mobileOpen: false,
                isMobile: true
            });
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.resizeFunction);
    }
    componentDidUpdate(e) {
        if (e.history.location.pathname !== e.location.pathname) {
            this.refs.mainPanel.scrollTop = 0;
            if (this.state.mobileOpen) {
                this.setState({ mobileOpen: false });
            }
        }
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeFunction);
    }

    render() {
        const { user, classes, ...rest } = this.props;

        /**
         * Go over every sidebar button and check if the user has permission for it
         */
        let routesWithPermissions = dashboardRoutes;

        routesWithPermissions.forEach(function(route) {
            if (route.permission !== undefined) {
                route.visible = Session.hasPermission(route.permission);
            }
        });

        return (
            <div className={classes.wrapper}>
                <Sidebar
                    routes={routesWithPermissions}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                    color="blue"
                    {...rest}
                />
                <div id="main-layout-panel" className={classes.mainPanel} ref="mainPanel">
                    <HeaderContainer
                        handleDrawerToggle={this.handleDrawerToggle}
                        isMobile={this.state.isMobile}
                        {...rest}
                    />
                    {(
                        <div className={classes.map}>{switchRoutes}</div>
                    )}
                    {<Footer />}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.session.user.email,
});


NormalLayout.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect( mapStateToProps )(withStyles(layoutStyles)(NormalLayout));
