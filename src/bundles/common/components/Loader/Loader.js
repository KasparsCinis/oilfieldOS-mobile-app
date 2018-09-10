import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import withStyles from '@material-ui/core/styles/withStyles';
import compose from 'recompose/compose';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import React from "react";
import LogoPicture from '../../../../assets/logos/logo_126px.png';

const mapStateToProps = (state, ownProps) => ({
    isLoading: state.isLoading
})

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

export default compose(
    withStyles(styles),
    connect(mapStateToProps)
)(Loader);