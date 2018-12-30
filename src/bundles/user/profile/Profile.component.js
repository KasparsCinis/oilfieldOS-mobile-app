import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card/Card";
import TextField from "@material-ui/core/TextField/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import UserBox from "../../../components/UserBox";

const styles = theme => ({

});

const ProfileComponent = ({ classes, user, handleChangeProfilePicture }) => {

    return (
        <div>
            <Typography component="h5" variant="display1" style={{float:'left'}}>
                Profile
            </Typography>

            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Card style={{padding:'15px'}}>
                        <UserBox onClick={handleChangeProfilePicture} style={{width:'100%'}} user={user}/>
                        <br/>
                        <label>Email</label>
                        <TextField
                            margin="dense"
                            type="text"
                            fullWidth
                            value={user.email}
                            read-only
                        />
                        <label>Phone</label>
                        <TextField
                            margin="dense"
                            type="text"
                            fullWidth
                            value={user.phone}
                            read-only
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );

};

export default withStyles(styles)(ProfileComponent);