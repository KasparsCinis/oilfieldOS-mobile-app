import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles';

import React from "react";
import LogoPicture from '../../../../assets/logos/logo_126px.png';

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
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
        marginTop: theme.spacing.unit * 6,
    },
});

const Login = ({ classes, authenticate }) => {

    let username;
    let password;

    return (
        <div className={classes.paper}>
            <div align='center'>
                <img src={LogoPicture}></img>
            </div>
            <Typography variant='headline' align='center' gutterBottom>
                Sign in
            </Typography>
            <Typography variant='subheading' align='center' gutterBottom>
                Use your oilfieldOS account.
            </Typography>
            <form className={classes.form} onSubmit={e => {
                e.preventDefault();
                console.log(username, password);
                authenticate({
                    'username': username,
                    'password': password
                });
            }}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="username">Email</InputLabel>
                    <Input id="username" ref={username} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" ref={password} />
                </FormControl>
                <Button variant='flat' size='small' align='left' color='default'>
                    Forgot password?
                </Button>
                <Button className={classes.submit} variant="raised" color="primary" type="submit" fullWidth>
                    Login
                </Button>
            </form>
        </div>
        )
}

export default withStyles(styles)(Login);