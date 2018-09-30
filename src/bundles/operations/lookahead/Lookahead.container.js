import React from 'react';
import Component from "../../../components/component";
import LookaheadComponent from "./Lookahead.component";
import {
    fetchGanttChartData,
} from "./Lookahead.service";
import Session from "../../user/Session/Session";

class LookaheadContainer extends Component {

    constructor(props) {
        super(props);

        /**
         * @todo custom date range
         */
        let startDate =  new Date(Date.parse("2018-09-24"));
        let endDate = new Date(Date.parse("2018-10-08"));

        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);

        this.state = {
            ganttData: {},
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
                    //'start_date':startDate,
                     //'end_date':endDate
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
            }
        };

        this.validatePermission('');
    }

    componentWillMount() {
        this.fetchData();


    }

    componentDidMount() {

    }

    configureGantt() {

/*
        this.setState(prevState => ({
            ...prevState,

        }));*/
    }

    componentWillUnmount() {
        console.log('close');
    }

    fetchData() {
        fetchGanttChartData()
            .then(response => response.json())
            .then(response => {
                let startDate =  new Date(Date.parse("2018-09-30"));
                let endDate = new Date(Date.parse("2018-10-04"));

                startDate.setHours(0, 0, 0, 0);
                endDate.setHours(0, 0, 0, 0);

                let ganttConfig = this.state.ganttConfig;

                ganttConfig.config['start_date'] = startDate.setDate(startDate.getDate());
                ganttConfig.config['end_date'] = endDate.setDate(endDate.getDate());

                this.setState(prevState => ({
                    ...prevState,
                    ganttData: response,
                    ganttConfig: ganttConfig
                }));

                this.configureGantt();
            });
    }

    render() {
        return <LookaheadComponent
            data={this.state.ganttData}
            config={this.state.ganttConfig}
        />
    }
}

export default LookaheadContainer;