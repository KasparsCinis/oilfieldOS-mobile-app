import React from 'react';
import Dashboard from './Dashboard'
import Component from "../../../components/component";

class DashboardContainer extends Component {

    constructor(props) {
        super(props);

        console.log(1231123);
        //Check authentication
    }

    render() {
        return <Dashboard />;
    }
}

export default DashboardContainer;