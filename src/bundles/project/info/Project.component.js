import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from "@material-ui/core/TextField/TextField";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {openModalElement} from "../../common/Modal/Modal.container";
import ViewMeetingModal from "../../../modals/project/ViewMeeting.Modal";
import UserBox from "../../../components/UserBox";

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

const ProjectComponent = ({ classes, project}) => {

    return (
        <div>
            <Typography component="h5" variant="display1" style={{float:'left'}}>
                {project.name}
            </Typography>

            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Card style={{padding:'15px'}}>
                        <label>Operator</label>
                        <TextField
                            margin="dense"
                            type="text"
                            fullWidth
                            value={project.operator}
                            read-only
                        />
                        <label>Contractor</label>
                        <TextField
                            margin="dense"
                            type="text"
                            fullWidth
                            value={project.contractor}
                            read-only
                        />
                        <label>Type</label>
                        <TextField
                            margin="dense"
                            type="text"
                            fullWidth
                            value={project.type}
                            read-only
                        />
                        <label>Entity</label>
                        <TextField
                            margin="dense"
                            type="text"
                            fullWidth
                            value={project.entity}
                            read-only
                        />
                        <label>Currency</label>
                        <TextField
                            margin="dense"
                            type="text"
                            fullWidth
                            value={project.currency}
                            read-only
                        />
                        <label>Address</label>
                        <TextField
                            margin="dense"
                            type="text"
                            fullWidth
                            value={project.address}
                            read-only
                        />
                        <label>WBS Number</label>
                        <TextField
                            margin="dense"
                            type="text"
                            fullWidth
                            value={project.wbs}
                            read-only
                        />
                        <label>Authority NO</label>
                        <TextField
                            margin="dense"
                            type="text"
                            fullWidth
                            value={project.authority}
                            read-only
                        />
                        <label>VAT</label>
                        <TextField
                            margin="dense"
                            type="text"
                            fullWidth
                            value={project.vat}
                            read-only
                        />
                        <label>Start Date</label>
                        <TextField
                            margin="dense"
                            type="text"
                            fullWidth
                            value={project.start_date}
                            read-only
                        />
                        <label>End Date</label>
                        <TextField
                            margin="dense"
                            type="text"
                            fullWidth
                            value={project.end_date}
                            read-only
                        />
                    </Card>

                    <h2>Personnel</h2>

                    {project.roles.map(role => {
                        return (
                            <ExpansionPanel key={role.id}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>{role.name}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{display:'inline-block',width:'100%'}}>
                                    {role.users.map(roleUser => {
                                        return (
                                            <UserBox key={roleUser.id} user={roleUser}/>
                                        );
                                    })}
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        );
                    })}
                </Grid>
            </Grid>

        </div>
    );
};

export default withStyles(styles)(ProjectComponent);