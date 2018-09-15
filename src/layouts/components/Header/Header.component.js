import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// @material-ui/icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import { default as MenuIcon } from "@material-ui/icons/Menu";

import headerStyle from "./Header.style.js";

function Header({ classes, isShown, handleMenu, handleClose, handleLogout, profileAnchorEl, ...props }) {

    function getProject() {
        return 'Lochranza';
    }

    const open = Boolean(profileAnchorEl);
    const appClassNames = classNames(classes.appBar, props.isMobile ? null : classes.appNormal, isShown ? null : classes.hidden);

    return (
        <AppBar className={appClassNames}>
            <Toolbar className={classes.container}>
                <div className={classes.flex}>
                    <Button color="primary" className={classes.title}>
                        {getProject()}
                    </Button>
                </div>
                <Hidden smDown implementation="css">
                    <IconButton
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup="true"
                        onClick={handleMenu}
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
                        open={open}
                        onClose={handleClose}
                    >
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
        </AppBar>
    );
}


Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(headerStyle)(Header);