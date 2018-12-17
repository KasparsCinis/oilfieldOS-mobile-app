import React from 'react';
import Component from "../../components/component";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import {closeModalElement, openModalElement} from "../../bundles/common/Modal/Modal.container";
import {connect} from "react-redux";
import {getMeeting} from "./MeetingModal.service";
import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card/Card";

class ViewMeetingModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: true,
            meeting: {
                'topics': []
            }
        };

        this.fetchData();
    }

    handleClose = () => {
        this.setState({ open: false });

        closeModalElement();
    };

    fetchData() {

        getMeeting(this.props.modalconfig.id)
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    meeting: response
                }));
            });

    }

    render() {
        return <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            scroll='paper'
        >
            <DialogTitle>Meeting #{this.state.meeting.no}</DialogTitle>
            <DialogContent>
                <form>
                    <label>Subject</label>
                    <TextField
                        margin="dense"
                        type="text"
                        fullWidth
                        value={this.state.meeting.subject}
                        read-only
                    />
                    <label>Location</label>
                    <TextField
                        margin="dense"
                        type="text"
                        fullWidth
                        value={this.state.meeting.location}
                        read-only
                    />
                    <label>Date</label>
                    <TextField
                        margin="dense"
                        type="text"
                        fullWidth
                        value={this.state.meeting.date}
                        read-only
                    />
                    <label>Duration</label>
                    <TextField
                        margin="dense"
                        type="text"
                        fullWidth
                        value={this.state.meeting.duration}
                        read-only
                    />
                    <label>Description</label>
                    <TextField
                        margin="dense"
                        type="text"
                        fullWidth
                        value={this.state.meeting.description}
                        read-only
                    />
                    <h2>Topics</h2>
                    {this.state.meeting.topics.map(row => {
                        return (
                            <div key={row.id}>
                                <label>Topic #{row.index}</label>
                                <TextField
                                    margin="dense"
                                    type="text"
                                    fullWidth
                                    value={row.subject}
                                    read-only
                                />
                            </div>
                        );
                    })}
                </form>
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

export default connect( mapStateToProps )(ViewMeetingModal);