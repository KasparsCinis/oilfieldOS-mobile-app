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

// @material-ui/icons
import Menu from "@material-ui/icons/Menu";

import headerStyle from "./Header.style.js";

function Header({ classes, isShown, ...props }) {

    function getProject() {
        return 'Lochranza';
    }

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
                    <div>MEDIUMS SCREEN</div>
                </Hidden>
                <Hidden mdUp implementation="css">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerToggle}
                    >
                        <Menu />
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