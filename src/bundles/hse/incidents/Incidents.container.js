import React from 'react';
import Component from "../../../components/component";
import IncidentsComponent from "./Incidents.component";
import {fetchIncidents} from "./Incidents.service";
import CreateIncidentModal from "../../../modals/hse/CreateIncident.Modal";
import {openModalElement as openModal} from "../../common/Modal/Modal.container";

class IncidentsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            incidents: [],
            incidentTypes: []
        };

        this.validatePermission('opals-view-incidents');

        this.handleDialogOpen = this.handleDialogOpen.bind(this);
    }

    componentWillMount() {
        this.fetchData();
    }

    handleDialogOpen = () => {
        openModal(CreateIncidentModal, {
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

            handleDialogOpen={this.handleDialogOpen}
        />
    }
}

export default IncidentsContainer;