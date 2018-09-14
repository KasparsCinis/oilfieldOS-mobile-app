import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {NavLink, Route, Switch} from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

// core components
import sidebarStyle from "./Sidebar.style.js";
import { connect } from "react-redux";
import Session from "../../../bundles/user/Session/Session";
import {authenticateFailed, authenticateRequest, authenticateSuccess} from "../../../bundles/user/Login/Login.actions";
import {activateLoader, disableLoader} from "../../../bundles/common/Loader/Loader.container";
import {loginQuery} from "../../../bundles/user/Login/Login.service";

const Sidebar = ({ logo, collapseOpen, handleModuleClick, ...props }) => {
    // verifies if routeName is the one active (in browser input)
    function activeRoute(routeName) {
        return props.location.pathname.indexOf(routeName) > -1 ? true : false;
    }


    const { classes, color, image, routes } = props;
    var links = (
        <List className={classes.list}>
            {routes.map((prop, key) => {
                const whiteFontClasses = classNames({
                    [" " + classes.whiteFont]: activeRoute(prop.path)
                });
                let buttons = [];

                /**
                 * Module
                 */
                if (prop.children !== undefined) {

                    let buttons = prop.children.map((childrenProp, childrenKey) => {
                        return (
                            <ListItem button className={(classes.itemLink + classes.nested)} key={childrenKey}>
                                <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                                    <Icon>{childrenProp.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText
                                    primary={childrenProp.sidebarName}
                                    className={classes.itemText + whiteFontClasses}
                                    disableTypography={true}
                                />
                            </ListItem>
                        )
                    });

                    // {buttons}
                    //
                    //onClick={this.handleClick}
                    return (
                        <div key={prop.key}>
                            <ListItem button onClick={handleModuleClick(prop.key)}>
                                <ListItemIcon>
                                    <Icon>Home</Icon>
                                </ListItemIcon>
                                <ListItemText inset primary="Inbox" />
                                {collapseOpen[prop.key] ? <ExpandMore/> : <ExpandLess/>}
                            </ListItem>
                            <Collapse in={collapseOpen[prop.key]} timeout="auto" unmountOnExit >
                                <List component="div" disablePadding>

                                </List>
                            </Collapse>
                        </div>
                    );

                } else {
                    return (
                        <NavLink
                            to={prop.path}
                            className={classes.item}
                            activeClassName="active"
                            key={key}
                        >
                            <ListItem button className={classes.itemLink}>
                                <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                                    <Icon>{prop.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText
                                    primary={prop.sidebarName}
                                    className={classes.itemText + whiteFontClasses}
                                    disableTypography={true}
                                />
                            </ListItem>
                        </NavLink>
                    );
                }

            })}
        </List>
    );
    var brand = (
        <div className={classes.logo}>
            <NavLink to='/dashboard' className={classes.logoLink}>
                <div className={classes.logoImage}>
                    <img src={logo} alt="logo" className={classes.img} />
                </div>
                oilfieldOS
            </NavLink>
        </div>
    );
    return (
        <div>
            <Hidden mdUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={props.open}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    onClose={props.handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                >
                    {brand}
                    <div className={classes.sidebarWrapper}>
                        {links}
                    </div>
                    {image !== undefined ? (
                        <div
                            className={classes.background}
                            style={{ backgroundImage: "url(" + image + ")" }}
                        />
                    ) : null}
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer
                    anchor="left"
                    variant="permanent"
                    open
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    {brand}
                    <div className={classes.sidebarWrapper}>{links}</div>
                    {image !== undefined ? (
                        <div
                            className={classes.background}
                            style={{ backgroundImage: "url(" + image + ")" }}
                        />
                    ) : null}
                </Drawer>
            </Hidden>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    logo: Session.getCurrentCompany() ? Session.getCurrentCompany().logo : '',
    collapseOpen: []
});

const handleModuleClick = (dispatch) => ({

    toggleCollapse: (collapseKey) => {

    }
});

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect( mapStateToProps, handleModuleClick )(withStyles(sidebarStyle)(Sidebar));