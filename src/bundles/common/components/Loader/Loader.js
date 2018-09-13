import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Fade from "@material-ui/core/Fade/Fade";

const styles = theme => ({
    loader: {
        display: 'table',
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(10,10,10,0.65)',
        color:'white',
        fontSize: '25px',
        zIndex:999,
    },
    content: {
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center'
    },
    clickable: {
        pointerEvents: 'all'
    },
    unclickable: {
        pointerEvents: 'none'
    }
});

const Loader = ({ classes, isLoading}) => {

    return (
        <Fade in={isLoading}>
            <div className={isLoading ? classes.clickable : classes.unclickable}>
                <div className={classes.loader}>
                    <Grid container className={classes.content}>
                        <CircularProgress className={classes.progress} size={50}/>
                        <br/>
                        Loading, please wait
                    </Grid>
                </div>
            </div>
        </Fade>
    )
};

export default withStyles(styles)(Loader);