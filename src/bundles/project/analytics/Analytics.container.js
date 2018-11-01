import React from 'react';
import Component from "../../../components/component";
import AnalyticsComponent from "./Analytics.component";
import {
    fetchCostDailyChartData,
    fetchCostPhaseChartData,
    fetchCostVendorChartData,
    fetchCostWeeklyChartData,
    fetchDepthChartData, fetchHseChartData,
    fetchIltCategoryChartData,
    fetchNptCategoryChartData,
    fetchProductiveNptChartData,
    fetchProductiveNptRatioChartData,
    fetchRopChartData,
    fetchTimeChartData
} from "./Analytics.service";
import Session from "../../user/Session/Session";


class AnalyticsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0,
            loadedTabs: {},
            visibleTabs: {},
            timeChart: [],
            depthChart: [],
            productiveNptChart: [],
            productiveNptRatioChart: [],
            ropChart: [],
            nptCategoryChart: [],
            iltCategoryChart: [],

            dailyCostChart: [],
            weeklyCostChart: [],
            vendorCostChart: [],
            phaseCostChart: [],

            hseChart: []
        };

        this.validatePermission('operations-view-analytics');

        this.changeTab = this.changeTab.bind(this);
    }

    componentWillMount() {
        this.fetchData(0);

        /**
         * Each tab has a different permission
         */
        let visibleOperations = Session.hasPermission('operations-view-analytics-operations');
        let visibleCosts = Session.hasPermission('operations-view-analytics-costs');
        let visibleActions = Session.hasPermission('operations-view-analytics-actions');

        this.setState(prevState => ({
            ...prevState,
            visibleTabs: {
                0: visibleOperations,
                1: visibleCosts,
                2: visibleActions
            }
        }));
    }

    fetchData(tab) {
        /**
         * Operations charts
         */
        if (tab === 0 && !this.state.loadedTabs[0]) {
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

        /**
         * Costs charts
         */
        if (tab === 1 && !this.state.loadedTabs[1]) {
            fetchCostDailyChartData()
                .then(response => response.json())
                .then(response => {
                    this.setState(prevState => ({
                        ...prevState,
                        dailyCostChart: response
                    }));
                });

            fetchCostWeeklyChartData()
                .then(response => response.json())
                .then(response => {
                    this.setState(prevState => ({
                        ...prevState,
                        weeklyCostChart: response
                    }));
                });

            fetchCostVendorChartData()
                .then(response => response.json())
                .then(response => {
                    this.setState(prevState => ({
                        ...prevState,
                        vendorCostChart: response
                    }));
                });

            fetchCostPhaseChartData()
                .then(response => response.json())
                .then(response => {
                    this.setState(prevState => ({
                        ...prevState,
                        phaseCostChart: response
                    }));
                });
        }

        /**
         * Actions charts
         */
        if (tab === 2 && !this.state.loadedTabs[2]) {
            fetchHseChartData()
                .then(response => response.json())
                .then(response => {
                    this.setState(prevState => ({
                        ...prevState,
                        hseChart: response
                    }));
                });
        }

        let loadedTabs = this.state.loadedTabs;
        loadedTabs[tab] = true;

        this.setState(prevState => ({
            ...prevState,
            loadedTabs: loadedTabs
        }));
    }

    changeTab(event, value) {
        this.setState(prevState => ({
            ...prevState,
            activeTab: value
        }));

        this.fetchData(value);

        return true;
    }

    render() {
        return <AnalyticsComponent

            timeChart={this.state.timeChart}
            depthChart={this.state.depthChart}
            productiveNptChart={this.state.productiveNptChart}
            productiveNptRatioChart={this.state.productiveNptRatioChart}
            ropChart={this.state.ropChart}
            nptCategoryChart={this.state.nptCategoryChart}
            iltCategoryChart={this.state.iltCategoryChart}

            dailyCostChart={this.state.dailyCostChart}
            weeklyCostChart={this.state.weeklyCostChart}
            vendorCostChart={this.state.vendorCostChart}
            phaseCostChart={this.state.phaseCostChart}

            hseChart={this.state.hseChart}

            activeTab={this.state.activeTab}
            visibleTabs={this.state.visibleTabs}
            changeTab={this.changeTab}
        />
    }
}

export default AnalyticsContainer;