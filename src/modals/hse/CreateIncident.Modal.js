import React from 'react';
import Component from "../../components/component";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { DatePicker } from 'material-ui-pickers';
import {closeModalElement} from "../../bundles/common/Modal/Modal.container";
import {connect} from "react-redux";
import {fetchIncidents} from "../../bundles/hse/incidents/Incidents.service";
import {postIncident} from "./IncidentModal.service";
import moment from "moment/moment";


class CreateIncidentModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: true,
            incidentTypes: [],
            date: moment(),
            details: "",
            headline: "",
            type: 1,
            errors: {}
        };

        this.fetchData();
    }

    handleClose = () => {
        this.setState({ open: false });

        closeModalElement();
    };

    fetchData() {

        fetchIncidents()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    incidentTypes: response.types
                }));
            });

    }

    handleSubmit(date, details, headline, type) {

        postIncident(date, details, headline, type)
            .then(response => response.json())
            .then(response => {

                if (response.status === "success") {
                    this.props.modalconfig.success();

                    this.setState(prevState => ({
                        ...prevState,
                        errors: {}
                    }));

                    closeModalElement();
                } else {
                    this.setState(prevState => ({
                        ...prevState,
                        errors: {
                            date: response['incident-date'],
                            details: response['incident-details'],
                            headline: response['incident-headline'],
                            type: response['incident-type'],
                        }
                    }));
                }
            });

    }

    render() {
        let errors = this.state.errors;
        let incidentTypes = this.state.incidentTypes;

        return <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                scroll='paper'
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
                        value={this.state.type}
                        onChange={event => {this.setState({type:event.target.value})}}
                    >
                        {Object.keys(incidentTypes).map(typeIndex => (
                            <MenuItem key={typeIndex} value={typeIndex}>{incidentTypes[typeIndex]}</MenuItem>
                        ))}
                    </TextField>
                    <span style={{color:'red'}}>{errors.type}</span>
                    <TextField
                        required
                        margin="dense"
                        id="incident-headline"
                        label="Headline"
                        type="text"
                        fullWidth
                        value={this.state.headline}
                        onChange={event => {this.setState({headline:event.target.value})}}
                    />
                    <span style={{color:'red'}}>{errors.headline}</span>
                    <TextField
                        required
                        multiline
                        margin="dense"
                        id="incident-details"
                        label="Details"
                        type="text"
                        fullWidth
                        value={this.state.details}
                        onChange={event => {this.setState({details:event.target.value})}}
                    />
                    <span style={{color:'red'}}>{errors.details}</span>
                    <DatePicker
                        label="To Date"
                        showTodayButton
                        maxDateMessage="Date must be after start date"
                        value={this.state.date}
                        onChange={value => {this.setState({date:value})}}
                        style={{width:'100%'}}
                    />
                    <span style={{color:'red'}}>{errors.date}</span>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="default">
                        Cancel
                    </Button>
                    <Button onClick={e => {
                        this.handleSubmit(
                            this.state.date.format("YYYY-MM-DD"),
                            this.state.details,
                            this.state.headline,
                            this.state.type
                        );
                    }} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
    }
}

const mapStateToProps = (state, ownProps) => ({
    config: state.modal.config
});

export default connect( mapStateToProps )(CreateIncidentModal);