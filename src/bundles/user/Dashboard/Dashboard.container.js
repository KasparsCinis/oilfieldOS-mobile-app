import React from 'react';
import DashboardComponent from './Dashboard.component'
import Component from "../../../components/component";
import Session from "../Session/Session";
import {fetchDailyCostValue, fetchTotalCostValue, fetchUserNotifications, fetchUserTodos} from "./Dashboard.service";

class DashboardContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visibleDailyCostChart: Session.hasPermission('costs-view-daily-reports'),
            visibleTotalCostChart: Session.hasPermission('costs-view-total-costs'),
            dailyCost: {
                value: 0,
                currency: ''
            },
            totalCost: {
                value: 0,
                currency: ''
            },
            notifications: [],
            todos: []
        };

        this.fetchData();
    }

    fetchData() {
        fetchDailyCostValue()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    dailyCost: response
                }));
            });
        fetchTotalCostValue()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    totalCost: response
                }));
            });
        fetchUserNotifications()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    notifications: response
                }));
            });
        fetchUserTodos()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    todos: response
                }));
            });
    }

    render() {
        return <DashboardComponent
            visibleDailyCost={this.state.visibleDailyCostChart}
            visibleTotalCost={this.state.visibleTotalCostChart}

            dailyCost={this.state.dailyCost}
            totalCost={this.state.totalCost}
            notifications={this.state.notifications}
            todos={this.state.todos}
        />;
    }
}

export default DashboardContainer;