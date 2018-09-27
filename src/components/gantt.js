/* global gantt */

import React, { Component } from 'react';
import 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

class Gantt extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        gantt.init(this.ganttContainer);


        console.log(this.props.tasks);
    }

    componentWillUnmount() {
        /**
         * @todo undo configuration?
         */
    }

    componentDidUpdate() {
        console.log("UPDATE");
        if (this.props.tasks.data === undefined) {
            return;
        }
        console.log('remd', this.props.tasks);

        gantt.parse(this.props.tasks);

        gantt.render();
    }

    /**
     * @todo
     * @param configuration
     */
    setGanttConfig(configuration = {}) {

        for(var propertyName in configuration) {
            console.log(propertyName);
            gantt.config[propertyName] = configuration[propertyName];
        }

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
