import React from 'react';
import Component from "../../../components/component";
import AnalyticsComponent from "./Analytics.component";
import {
    fetchDepthChartData, fetchIltCategoryChartData, fetchNptCategoryChartData, fetchNptSpreadChartData,
    fetchProductiveNptChartData,
    fetchProductiveNptRatioChartData, fetchRopChartData,
    fetchTimeChartData
} from "./Analytics.service";


class AnalyticsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timeChart: [],
            depthChart: [],
            productiveNptChart: [],
            productiveNptRatioChart: [],
            nptSpreadChart: [],
            ropChart: [],
            nptCategoryChart: [],
            iltCategoryChart: []
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
                this.setState(prevState => ({
                    ...prevState,
                    timeChart: response
                }));
            });

        fetchDepthChartData()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    depthChart: response
                }));
            });

        fetchProductiveNptChartData()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    productiveNptChart: response
                }));
            });

        fetchProductiveNptRatioChartData()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    productiveNptRatioChart: response
                }));
            });

        fetchNptSpreadChartData()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    nptSpreadChart: response
                }));
            });

        fetchRopChartData()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    ropChart: response
                }));
            });

        fetchNptCategoryChartData()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    nptCategoryChart: response
                }));
            });

        fetchIltCategoryChartData()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    iltCategoryChart: response
                }));
            });
    }

    render() {
        return <AnalyticsComponent
            timeChart={this.state.timeChart}
            depthChart={this.state.depthChart}
            productiveNptChart={this.state.productiveNptChart}
            productiveNptRatioChart={this.state.productiveNptRatioChart}
            nptSpreadChart={this.state.nptSpreadChart}
            ropChart={this.state.ropChart}
            nptCategoryChart={this.state.nptCategoryChart}
            iltCategoryChart={this.state.iltCategoryChart}
        />
    }
}

export default AnalyticsContainer;