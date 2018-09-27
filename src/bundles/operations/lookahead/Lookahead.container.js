import React from 'react';
import Component from "../../../components/component";
import LookaheadComponent from "./Lookahead.component";
import {
    fetchGanttChartData,
} from "./Lookahead.service";
import Session from "../../user/Session/Session";

var data = {
    data: [
        {id: 1, text: 'Task #1', start_date: '15-04-2017', duration: 3, progress: 0.6},
        {id: 2, text: 'Task #2', start_date: '18-04-2017', duration: 3, progress: 0.4}
    ],
    links: [
        {id: 1, source: 1, target: 2, type: '0'}
    ]
};

class LookaheadContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ganttData: {
                data: [
                    {id: 1, text: 'Task #1', start_date: '15-04-2017', duration: 3, progress: 0.6},
                    {id: 2, text: 'Task #2', start_date: '18-04-2017', duration: 3, progress: 0.4}
                ],
                links: [
                    {id: 1, source: 1, target: 2, type: '0'}
                ]
            },
            ganttConfig: {
                'xml_date': "%Y-%m-%d %H:%i",
                'duration_unit': "minute"
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
        let startDate =  new Date(Date.parse("2018-09-27"));
        let endDate = new Date(Date.parse("2018-10-04"));

        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);

        /* global gantt */
        /*gantt.config.xml_date = "%Y-%m-%d %H:%i";
        gantt.config.scale_unit = "day";
        gantt.config.step = 1;
        gantt.config.date_scale = "%D %d-%m-%Y";
        gantt.config.duration_unit = "minute";
        gantt.config.duration_step = 1;
        gantt.config.drag_resize = false;
        gantt.config.readonly = true;
        gantt.config.autosize = "y";
        gantt.config.keep_grid_width = true;
        gantt.config.columns = [
            {name: "no", label: "#", width: 25},
            {name: "description", label: "Step", tree: true, width: 295},
            {name: "hour_text", label: "(hr)", align: "center", width: 30}
        ];



        gantt.config.scale_height = 35;*/


        //gantt.config.start_date = startDate.setDate(startDate.getDate());
        //gantt.config.end_date = endDate.setDate(endDate.getDate());

        /*
        gantt.templates.task_class = function (start, end, task) {
            if (task.project == true) {
                return "project-task";
            } else {
                return "";
            }
        };*/
    }

    componentWillUnmount() {
        console.log('close');
    }

    fetchData() {
        fetchGanttChartData()
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => ({
                    ...prevState,
                    ganttData: response
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