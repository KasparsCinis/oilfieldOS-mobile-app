import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import Icon from "@material-ui/core/Icon";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    card: {
        position: 'relative',
    },

    statusColumn: {
        width: '30px',
        fontSize: '20px',
        paddingLeft: '5px'
    },
    smallHeader: {
        fontSize: '30px;',
        paddingLeft: '5px'
    },
    speedDialButton: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
});

const IncidentsComponent = ({ classes, incidents, speedDialOpen, handleSpeedDialClick, handleSpeedDialOpen, handleSpeedDialClose, handleDialogClose,
                                handleDialogOpen, addDialogOpen, incidentTypes}) => {

    const actions = [
        { icon: <Icon>add</Icon>, name: 'Create', onClick: handleDialogOpen },
    ];

    return (
        <div>
            <Typography component="h5" variant="display1" style={{float:'left'}}>
                Incidents
            </Typography>

            <Grid container spacing={16}>
                {incidents.map(row => {
                    return (
                        <Grid item xs={12} key={row.id}>
                            <Card className={classes.card}>
                                <table>
                                    <tr>
                                        <td className={classes.statusColumn} style={{backgroundColor: row.color}}>#{row.no}</td>
                                        <td className={classes.smallHeader}>{row.headline}</td>
                                    </tr>
                                </table>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>

            <SpeedDial
                ariaLabel="Quick Actions"
                className={classes.speedDialButton}
                icon={<SpeedDialIcon />}
                onClick={handleSpeedDialClick}
                onClose={handleSpeedDialClose}
                open={speedDialOpen}
            >
                {actions.map(action => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={action.onClick}
                    />
                ))}
            </SpeedDial>

            <Dialog
                open={addDialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="create-inspection-dialog"
            >
                <DialogTitle>Create new Inspection</DialogTitle>
                <DialogContent>
                    <TextField
                        required
                        autoFocus
                        select
                        margin="dense"
                        id="incident-type"
                        label="Type"

                        fullWidth
                    >
                        {Object.keys(incidentTypes).map(typeIndex => (

                            <MenuItem key={typeIndex} value={typeIndex}>{incidentTypes[typeIndex]}</MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        required
                        margin="dense"
                        id="incident-headline"
                        label="Headline"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        required
                        multiline
                        margin="dense"
                        id="incident-details"
                        label="Details"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        required
                        margin="dense"
                        id="incident-date"
                        label="Date"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="danger">
                        Cancel
                    </Button>
                    <Button onClick={handleDialogClose} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default withStyles(styles)(IncidentsComponent);