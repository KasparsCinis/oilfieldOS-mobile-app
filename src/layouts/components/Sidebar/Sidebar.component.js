import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
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
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';

// core components
import sidebarStyle from "./Sidebar.style.js";
import UserAvatar from "../../../components/UserAvatar";
import IconButton from "@material-ui/core/IconButton/IconButton";

const Sidebar = ({ logo, collapseOpen, handleModuleClick, handleMobileTabToggle, handleLogout, user, openMobileProfileTab, ...props }) => {
    // verifies if routeName is the one active (in browser input)
    function activeRoute(routeName) {
        return props.location.pathname.indexOf(routeName) > -1 ? true : false;
    }
    console.log(user);
    const { classes, color, routes } = props;
    var links = (
        <List>
            {routes.map((prop, key) => {
                const whiteFontClasses = classNames({
                    [" " + classes.active]: activeRoute(prop.path)
                });

                /**
                 * Module
                 */
                if (prop.children !== undefined) {
                    let buttons = prop.children.map((childrenProp, childrenKey) => {
                        return (
                            <NavLink
                                to={childrenProp.path}
                                className={classes.item}
                                activeClassName="active"
                                key={childrenKey}
                                style={{textDecoration:'none'}}
                            >
                                <ListItem button className={classes.itemLink + " " + classes.nested + whiteFontClasses}>
                                    <ListItemIcon className={classes.itemIcon}>
                                        <Icon>{childrenProp.icon}</Icon>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={childrenProp.sidebarName}
                                        className={classes.itemText}
                                        disableTypography={true}
                                    />
                                </ListItem>
                            </NavLink>
                        )
                    });

                    return (
                        <div key={key} className={classes.item}>
                            <ListItem button onClick={() => handleModuleClick(key)} className={classes.itemLink + whiteFontClasses}>
                                <ListItemIcon className={classes.itemIcon}>
                                    <Icon>{prop.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText primary={prop.sidebarName} disableTypography={true} className={classes.itemText}/>

                                <Hidden mdUp implementation="css">
                                    {collapseOpen[key] ?
                                        <ExpandMore className={classes.expandableIcon} />
                                        :
                                        <ExpandLess className={classes.expandableIcon} />
                                    }
                                </Hidden>

                            </ListItem>
                            <Collapse in={collapseOpen[key]} timeout="auto" unmountOnExit >
                                <List component="div" disablePadding>
                                    {buttons}
                                </List>
                            </Collapse>
                        </div>
                    );

                } else {
                    if (!prop.visible) {
                        return '';
                    }


                    return (
                        <NavLink
                            to={prop.path}
                            className={classes.item}
                            activeClassName="active"
                            key={key}
                            style={{textDecoration:'none'}}
                        >
                            <ListItem button className={classes.itemLink + whiteFontClasses}>
                                <ListItemIcon className={classes.itemIcon}>
                                    <Icon>{prop.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText
                                    primary={prop.sidebarName}
                                    className={classes.itemText}
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
        <div>
            <NavLink to='/dashboard'>
                <img src={logo} alt="logo" className={classes.logoImage}/>
            </NavLink>
        </div>
    );
    return (
        <div>
            {/**
             * Sidebar for mobile screens
             */}
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
                    <div className={classes.mobileContent}>
                        <div>
                            <UserAvatar user={user}/>
                        </div>
                        <div className={classes.mobileTitleContent}>
                            <div>
                                <Typography variant='body1' className={classes.mobileTitle}>
                                    {user.name}
                                </Typography>
                                <Typography variant='body2' className={classes.mobileSubTitle}>
                                    {user.email}
                                </Typography>
                            </div>
                            <IconButton
                                onClick={handleMobileTabToggle}
                                color="inherit"
                            >
                            {openMobileProfileTab ?
                                <ExpandMore className={classes.expandableIcon} />
                                :
                                <ExpandLess className={classes.expandableIcon} />
                            }
                            </IconButton>
                        </div>
                    </div>
                    <div className={openMobileProfileTab ? classes.hidden : classes.sidebarWrapper}>
                        {links}
                    </div>

                    <div className={openMobileProfileTab ? classes.sidebarWrapper : classes.hidden}>
                        <NavLink to='/profile' style={{textDecoration:'none'}}>
                            <ListItem button className={classes.itemLink}>
                                <ListItemIcon className={classes.itemIcon}>
                                    <Icon>account_box</Icon>
                                </ListItemIcon>
                                <ListItemText
                                    primary='Profile'
                                    className={classes.itemText}
                                    disableTypography={true}
                                />
                            </ListItem>
                        </NavLink>
                        <ListItem button className={classes.itemLink} onClick={handleLogout}>
                            <ListItemIcon className={classes.itemIcon}>
                                <ExitToApp />
                            </ListItemIcon>
                            <ListItemText
                                primary='Logout'
                                className={classes.itemText}
                                disableTypography={true}
                            />
                        </ListItem>
                    </div>
                </Drawer>
            </Hidden>


            {/**
             * Sidebar for medium screens
             */}
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
                    <Divider />
                    <div className={classes.sidebarWrapper}>{links}</div>
                </Drawer>
            </Hidden>
        </div>
    );
};

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);