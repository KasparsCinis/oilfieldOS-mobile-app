import React from 'react';
import Component from "../../../components/component";
import AnalyticsComponent from "./Analytics.component";
import {fetchTimeChartData} from "./Analytics.service";


class AnalyticsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timeChart: {}
        };

        this.validatePermission('');
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        fetchTimeChartData()
            .then(response => response.json())
            .then(response => {
                this.setState({
                    timeChart: response
                });
            });
    }

    render() {
        return <AnalyticsComponent
            timeChart={this.state.timeChart}
        />
    }
}

export default AnalyticsContainer;