import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {openModalElement} from "../../common/Modal/Modal.container";
import ViewIncidentModal from "../../../modals/hse/ViewIncident.Modal";

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
    actionButton: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    }
});

const IncidentsComponent = ({ classes, incidents, speedDialOpen, handleSpeedDialClick, handleSpeedDialOpen, handleSpeedDialClose,
                                handleDialogOpen}) => {

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
                                    <tr onClick={e => {
                                        openModalElement(ViewIncidentModal, {
                                            id: row.id
                                        })
                                    }}>
                                        <td className={classes.statusColumn} style={{backgroundColor: row.color}}>#{row.no}</td>
                                        <td className={classes.smallHeader}>{row.headline}</td>
                                    </tr>
                                </table>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>

            <Fab className={classes.speedDialButton} color="primary" aria-label="Add" onClick={handleDialogOpen}>
                <AddIcon />
            </Fab>
        </div>
    );
};

export default withStyles(styles)(IncidentsComponent);