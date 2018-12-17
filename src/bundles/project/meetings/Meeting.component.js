import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import {openModalElement} from "../../common/Modal/Modal.container";
import ViewMeetingModal from "../../../modals/project/ViewMeeting.Modal";

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
        fontSize: '20px;',
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

const MeetingComponent = ({ classes, meetings}) => {

    return (
        <div>
            <Typography component="h5" variant="display1" style={{float:'left'}}>
                Meetings
            </Typography>

            <Grid container spacing={16}>
                {meetings.map(row => {
                    return (
                        <Grid item xs={12} key={row.id}>
                            <Card className={classes.card}>
                                <table>
                                    <tr onClick={e => {
                                        openModalElement(ViewMeetingModal, {
                                            id: row.id
                                        })
                                    }}>
                                        <td className={classes.statusColumn} style={{backgroundColor: '#00e676'}}>#{row.no}</td>
                                        <td className={classes.smallHeader}>{row.subject}</td>
                                    </tr>
                                </table>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default withStyles(styles)(MeetingComponent);