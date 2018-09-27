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
        console.log(1233);
        this.state = {

        };

        console.log(123);

        this.validatePermission('');
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {

    }

    render() {
        return <LookaheadComponent/>
    }
}

export default LookaheadContainer;