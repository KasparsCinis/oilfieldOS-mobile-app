import React from 'react';
import Component from "../../../components/component";
import {fetchProject} from "./Project.service";
import ProjectComponent from "./Project.component";

class ProjectContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            project: {
                roles: []
            }
        };

        this.validatePermission('settings-view-project-overview');
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        fetchProject()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    project: response,
                }));
            });
    }

    render() {
        return <ProjectComponent
            project={this.state.project}
        />
    }
}

export default ProjectContainer;