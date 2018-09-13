import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import FormHelperText from '@material-ui/core/FormHelperText';

import React from "react";
import LogoPicture from '../../../assets/logos/logo_126px.png';

const styles = theme => ({
    layout: {
        display: 'block', // Fix IE11 issue.
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        paddingTop: theme.spacing.unit * 3,
        position: 'fixed',
        width: `calc(100% - ${theme.spacing.unit * 6}px)`,
        height: '100%',
        backgroundColor: theme.palette.primary.A100
    },
    paper: {
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

const Login = ({ classes, authenticate, error }) => {

    let username;
    let password;

    return (
        <div className={classes.layout}>
            <Paper className={classes.paper}>
                <div align='center'>
                    <img src={LogoPicture} alt='oilfieldOS logo' />
                </div>
                <Typography variant='headline' align='center' gutterBottom>
                    Sign in
                </Typography>
                <Typography variant='subheading' align='center' gutterBottom>
                    Use your oilfieldOS account.
                </Typography>
                <form className={classes.form} onSubmit={e => {
                    e.preventDefault();

                    authenticate(
                        username,
                        password
                    );
                }}>
                    <FormControl margin="normal" required fullWidth error={error.length > 0}>
                        <InputLabel htmlFor="username">Email</InputLabel>
                        <Input id="username" onChange={event => username = event.target.value} />
                        <FormHelperText>{error}</FormHelperText>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth error={error.length > 0}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type='password' onChange={event => password = event.target.value} />
                        <FormHelperText>{error}</FormHelperText>
                    </FormControl>
                    <Button className={classes.submit} variant="raised" color="primary" type="submit" fullWidth>
                        Login
                    </Button>
                </form>
            </Paper>
        </div>
    )
};

export default withStyles(styles)(Login);