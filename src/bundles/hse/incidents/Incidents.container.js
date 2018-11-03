import React from 'react';
import Component from "../../../components/component";
import IncidentsComponent from "./Incidents.component";
import {fetchIncidents} from "./Incidents.service";

class IncidentsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            speedDialOpen: false,
            addDialogOpen: false,
            incidents: [],
            incidentTypes: []
        };

        this.validatePermission('opals-view-incidents');

        this.handleSpeedDialClick = this.handleSpeedDialClick.bind(this);
        this.handleSpeedDialOpen = this.handleSpeedDialOpen.bind(this);
        this.handleSpeedDialClose = this.handleSpeedDialClose.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
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

    handleDialogClose = () => {
        this.setState(prevState => ({
            ...prevState,
            addDialogOpen: false,
        }));
    };

    handleDialogOpen = () => {
        this.setState(prevState => ({
            ...prevState,
            addDialogOpen: true,
        }));
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

            addDialogOpen={this.state.addDialogOpen}
            handleDialogClose={this.handleDialogClose}
            handleDialogOpen={this.handleDialogOpen}
        />
    }
}

export default IncidentsContainer;