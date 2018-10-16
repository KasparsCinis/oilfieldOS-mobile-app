import React from 'react';
import './oilfieldIcon.css';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    oilfieldIcon: {
        fontFamily: "oilfieldos",
        fontStyle: 'normal',
        fontWeight: 'normal',
        speak: 'none',

        display: 'inline-block',
        textDecoration: 'inherit',
        textAlign: 'center',

        /* For safety - reset parent styles, that can break glyph codes*/
        fontVariant: 'normal',
        textTransform: 'none',

        /* fix buttons height, for twitter bootstrap */
        lineHeight: '1em'
    }
});


const OilfieldIcon = ({ classes, children, ...rest }) => {

    return (
        <i className={classes.oilfieldIcon} {...rest}>{children}</i>
    );

};

export default withStyles(styles)(OilfieldIcon);
