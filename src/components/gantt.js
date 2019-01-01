/* global gantt */

import React, { Component } from 'react';
import 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

class Gantt extends Component {

    componentDidMount() {
        gantt.config.show_unscheduled = true;

        gantt.init(this.ganttContainer);
    }

    componentWillUnmount() {
        /**
         * @todo undo configuration?
         */
    }

    componentDidUpdate() {
        if (this.props.tasks.data === undefined) {
            return;
        }
        let daty = this.props.tasks;

        gantt.clearAll();
        gantt.parse(daty);
        gantt.render();
        gantt.refreshData();
    }

    /**
     * @todo
     * @param configuration
     */
    setGanttConfig(configurationArray = {}) {

        Object.keys(configurationArray).forEach((configurationType) => {
            Object.keys(configurationArray[configurationType]).forEach((propertyName) => {
                gantt[configurationType][propertyName] = configurationArray[configurationType][propertyName];
            });
        });

        /* global gantt */
        gantt.config.show_unscheduled = true;
    }

    render() {
         const { config } = this.props;

        this.setGanttConfig(config);

        return (
            <div
                ref={(input) => { this.ganttContainer = input }}
                style={{width: '100%', height: '500px'}}
            ></div>
        )
    }
}

export default Gantt;
