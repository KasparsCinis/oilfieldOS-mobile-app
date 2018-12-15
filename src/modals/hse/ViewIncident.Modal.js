import React from 'react';
import Component from "../../components/component";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import {closeModalElement} from "../../bundles/common/Modal/Modal.container";
import {connect} from "react-redux";
import {getIncident} from "./IncidentModal.service";


class ViewIncidentModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: true,
            incident: []
        };

        this.fetchData();
    }

    handleClose = () => {
        this.setState({ open: false });

        closeModalElement();
    };

    fetchData() {

        getIncident(this.props.modalconfig.id)
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    incident: response
                }));
            });

    }

    render() {
        return <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            scroll='paper'
        >
            <DialogTitle>Inspection #{this.state.incident.no}</DialogTitle>
            <DialogContent>
                <TextField
                    multiline
                    margin="dense"
                    id="incident-details"
                    label="Type"
                    type="text"
                    fullWidth
                    defaultValue={this.state.incident.type}
                />
                <TextField
                    multiline
                    margin="dense"
                    id="incident-details"
                    label="Headline"
                    type="text"
                    fullWidth
                    value={this.state.incident.headline}
                />
                <TextField
                    multiline
                    margin="dense"
                    id="incident-details"
                    label="Details"
                    type="text"
                    fullWidth
                    value={this.state.incident.details}
                />
                <TextField
                    multiline
                    margin="dense"
                    id="incident-details"
                    label="Date"
                    type="text"
                    fullWidth
                    value={this.state.incident.date}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="default">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    }
}

const mapStateToProps = (state, ownProps) => ({
    config: state.modal.config
});

export default connect( mapStateToProps )(ViewIncidentModal);