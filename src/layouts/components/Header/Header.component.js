import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// @material-ui/icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import { default as MenuIcon } from "@material-ui/icons/Menu";

import headerStyle from "./Header.style.js";
import Session from "../../../bundles/user/Session/Session";

function Header({ classes, isShown, handleProfileMenu, handleProjectMenu, handleClose, handleLogout, handleProjectDialog, profileAnchorEl,
                    projectAnchorEl, openProjectDialog, projects, handleProjectChange, ...props }) {

    function getProject() {
        return Session.getActiveProject().name;
    }

    const openProfileDropdown = Boolean(profileAnchorEl);
    const openProjectDropdown = Boolean(projectAnchorEl);
    const appClassNames = classNames(classes.appBar, props.isMobile ? null : classes.appNormal, isShown ? null : classes.hidden);

    return (
        <AppBar className={appClassNames}>
            <Toolbar className={classes.container}>
                <div className={classes.flex}>
                    <Button
                        color="primary"
                        className={classes.title}
                        onClick={handleProjectMenu}
                        aria-owns={openProjectDropdown ? 'menu-project' : null}
                    >
                        {getProject()}
                    </Button>
                    <Menu
                        id="menu-project"
                        anchorEl={projectAnchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={openProjectDropdown}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleProjectDialog}>Change Project</MenuItem>
                    </Menu>
                </div>
                <Hidden smDown implementation="css">
                    <IconButton
                        aria-owns={openProfileDropdown ? 'menu-appbar' : null}
                        aria-haspopup="true"
                        onClick={handleProfileMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={profileAnchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={openProfileDropdown}
                        onClose={handleClose}
                    >
                        <NavLink to='/profile' style={{textDecoration:'none'}}>
                            <MenuItem>Profile</MenuItem>
                        </NavLink>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </Hidden>
                <Hidden mdUp implementation="css">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>

            <Dialog open={openProjectDialog} onClose={handleClose} fullWidth aria-labelledby="simple-dialog-title">
                <DialogTitle id="simple-dialog-title">Choose Project</DialogTitle>
                <div>
                    <List>
                        {Object.values(projects).map(project => (
                            <ListItem button onClick={() => handleProjectChange(project.id)} key={project.id}>
                                <ListItemText primary={project.name} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Dialog>
        </AppBar>
    );
}


Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(headerStyle)(Header);