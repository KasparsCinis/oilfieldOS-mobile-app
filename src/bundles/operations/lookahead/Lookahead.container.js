import React from 'react';
import Component from "../../../components/component";
import LookaheadComponent from "./Lookahead.component";
import {
    fetchFlights,
    fetchGanttChartData, fetchPobData, fetchTransportData,
} from "./Lookahead.service";
import Session from "../../user/Session/Session";
import moment from "moment";

class LookaheadContainer extends Component {

    constructor(props) {
        super(props);

        let fromDate =  moment();
        let toDate = moment();

        toDate.add(7, 'days');

        fromDate.set({hour:0,minute:0,second:0,millisecond:0});
        toDate.set({hour:0,minute:0,second:0,millisecond:0});

        this.state = {
            pobData: {
                models: [],
                pobTotal: {
                    totalDayData: []
                },
                permittedPob: 0
            },
            transportData: [],
            flightData: [],
            ganttData: {},
            numberOfDays: 7,
            ganttConfig: {
                config: {
                    'xml_date': "%Y-%m-%d %H:%i",
                    'duration_unit': "minute",
                    'scale_unit':'day',
                    'step':1,
                    'date_scale':'%D %d-%m-%Y',
                    'duration_step':1,
                    'drag_resize':false,
                    'readonly':true,
                    'autosize':'y',
                    'keep_grid_width':true,
                    'columns':[
                        {name: "no", label: "#", width: 25},
                        {name: "description", label: "Step", tree: true, width: 295},
                        {name: "hour_text", label: "(hr)", align: "center", width: 30}
                    ],
                    'scale_height':35,
                    'row_height':20,
                    'open_tree_initially': true,
                    'start_date':fromDate,
                    'end_date':toDate,
                    'touch' : 'force'
                },
                templates: {
                    'task_class': function (start, end, task) {
                        if (task.project == true) {
                            return "project-task";
                        } else {
                            return "";
                        }
                    }
                }
            },
            isDateModalOpen: false,
            fromDate: fromDate,
            toDate: toDate,
            datesChanged: false
        };

        this.validatePermission('');

        this.handleDateModalClose = this.handleDateModalClose.bind(this);
        this.handleDateModalOpen = this.handleDateModalOpen.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    componentWillMount() {
        this.fetchData();
    }

    handleDateModalClose() {
        this.setState(prevState => ({
            ...prevState,
            isDateModalOpen: false
        }));

        if (this.state.datesChanged === true) {
            /**
             * Update gantt config start/end dates
             */
            let ganttConfig = this.state.ganttConfig;
            let numberOfDays = this.state.toDate.diff(this.state.fromDate, 'days');

            ganttConfig.config.start_date = this.state.fromDate;
            ganttConfig.config.end_date = this.state.toDate;

            if (numberOfDays < 0) {
                numberOfDays = 0;
            }

            this.setState(prevState => ({
                ...prevState,
                ganttConfig: ganttConfig,
                numberOfDays: numberOfDays
            }),() => {
                this.fetchData();
            });
        }
    }

    handleDateModalOpen() {
        this.setState(prevState => ({
            ...prevState,
            isDateModalOpen: true
        }));
    }

    handleDateChange(type, date) {
        if (type === "fromDate") {
            this.setState(prevState => ({
                ...prevState,
                fromDate: date,
                datesChanged: true,
            }));
        }
        if (type === "toDate") {
            this.setState(prevState => ({
                ...prevState,
                toDate: date,
                datesChanged: true
            }));
        }
    }

    fetchData() {
        let startDateFormatted = this.state.fromDate.format("YYYY/MM/DD");
        let endDateFormatted = this.state.toDate.format("YYYY/MM/DD");

        fetchGanttChartData(startDateFormatted, endDateFormatted)
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    ganttData: response,
                }));
            });

        fetchPobData(startDateFormatted, endDateFormatted)
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    pobData: response,
                }));
            });

        fetchTransportData(startDateFormatted, endDateFormatted, this.state.numberOfDays)
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    transportData: response,
                }));
            });

        fetchFlights(startDateFormatted, endDateFormatted, this.state.numberOfDays)
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    flightData: response,
                }));
            });
    }

    render() {
        return <LookaheadComponent
            ganttData={this.state.ganttData}
            pobData={this.state.pobData}
            transportData={this.state.transportData}
            flightData={this.state.flightData}
            config={this.state.ganttConfig}
            isDateModalOpen={this.state.isDateModalOpen}
            handleDateModalClose={this.handleDateModalClose}
            handleDateModalOpen={this.handleDateModalOpen}
            handleDateChange={this.handleDateChange}
            fromDate={this.state.fromDate}
            toDate={this.state.toDate}
            numberOfDays={this.state.numberOfDays}
        />
    }
}

export default LookaheadContainer;