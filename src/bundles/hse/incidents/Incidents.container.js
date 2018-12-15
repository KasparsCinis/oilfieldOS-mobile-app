import React from 'react';
import Component from "../../../components/component";
import IncidentsComponent from "./Incidents.component";
import {fetchIncidents} from "./Incidents.service";
import CreateIncidentModal from "../../../modals/hse/CreateIncident.Modal";
import {openModalElement} from "../../common/Modal/Modal.container";

class IncidentsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            speedDialOpen: false,
            incidents: [],
            incidentTypes: []
        };

        this.validatePermission('opals-view-incidents');

        this.handleSpeedDialClick = this.handleSpeedDialClick.bind(this);
        this.handleSpeedDialOpen = this.handleSpeedDialOpen.bind(this);
        this.handleSpeedDialClose = this.handleSpeedDialClose.bind(this);
        this.handleDialogOpen = this.handleDialogOpen.bind(this);
    }

    componentWillMount() {
        this.fetchData();
    }

    handleSpeedDialClick = () => {
        this.setState(prevState => ({
            ...prevState,
            speedDialOpen: !prevState.speedDialOpen,
        }));
    };

    handleSpeedDialOpen = () => {
        this.setState(prevState => ({
            ...prevState,
            speedDialOpen: true,
        }));
    };

    handleSpeedDialClose = () => {
        this.setState(prevState => ({
            ...prevState,
            speedDialOpen: false,
        }));
    };

    handleDialogOpen = () => {
        openModalElement(CreateIncidentModal, {
            success: this.fetchData.bind(this)
        })
    };

    fetchData() {
        fetchIncidents()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    incidents: response.incidents,
                    incidentTypes: response.types
                }));
            });
    }

    render() {
        return <IncidentsComponent
            incidents={this.state.incidents}
            incidentTypes={this.state.incidentTypes}

            speedDialOpen={this.state.speedDialOpen}
            handleSpeedDialClick={this.handleSpeedDialClick}
            handleSpeedDialOpen={this.handleSpeedDialOpen}
            handleSpeedDialClose={this.handleSpeedDialClose}

            handleDialogOpen={this.handleDialogOpen}
        />
    }
}

export default IncidentsContainer;