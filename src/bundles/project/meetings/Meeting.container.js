import React from 'react';
import Component from "../../../components/component";
import MeetingComponent from "./Meeting.component";
import {fetchMeetings} from "./Meeting.service";

class MeetingContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            meetings: []
        };

        this.validatePermission('opals-view-incidents');
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        fetchMeetings()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    meetings: response.meetings,
                }));
            });
    }

    render() {
        return <MeetingComponent
            meetings={this.state.meetings}
        />
    }
}

export default MeetingContainer;