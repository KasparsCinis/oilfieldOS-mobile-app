import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

import HeaderContainer from "./components/Header/Header.container";
import Footer from "./components/Footer/Footer.component";
import Sidebar from "./components/Sidebar/Sidebar.component";

import NotFoundContainer from '../bundles/common/NotFound/NotFound';

import logo from '../assets/logos/logo_126px.png';

const layoutStyles = theme => ({
    wrapper: {
        position: "relative",
        top: "0",
        height: "100vh"
    },
    mainPanel: {
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - 260px)`
        },
        overflow: "auto",
        position: "relative",
        float: "right",
        transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        maxHeight: "100%",
        width: "100%",
        overflowScrolling: "touch"
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
        marginTop: "70px"
    }
});

const dashboardRoutes = [
    {
        path: "/dashboard",
        sidebarName: "Dashboard",
        navbarName: "Material Dashboard",
        icon: "content_paste",
        component: NotFoundContainer
    },
    {
        path: "/user",
        sidebarName: "Session Profile",
        navbarName: "Profile",
        icon: "content_paste",
        component: NotFoundContainer
    },
];

const switchRoutes = (
    <Switch>
        {dashboardRoutes.map((prop, key) => {
            if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
            return <Route path={prop.path} component={prop.component} key={key} />;
        })}
    </Switch>
);

class NormalLayout extends React.Component {

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
        const { classes, ...rest } = this.props;
        return (
            <div className={classes.wrapper}>
                <Sidebar
                    routes={dashboardRoutes}
                    logo={logo}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                    color="blue"
                    {...rest}
                />
                <div className={classes.mainPanel} ref="mainPanel">
                    <HeaderContainer
                        routes={dashboardRoutes}
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

NormalLayout.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(layoutStyles)(NormalLayout);
