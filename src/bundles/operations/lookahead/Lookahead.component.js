import React from 'react';
import Plot from 'react-plotly.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Hidden from "@material-ui/core/Hidden";
import withStyles from '@material-ui/core/styles/withStyles';
import PlotlyChart from '../../../components/plotlyChart'

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ShowChart from '@material-ui/icons/ShowChart';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Check from '@material-ui/icons/Check';
import Gantt from "../../../components/gantt";

const styles = theme => ({

});

const LookaheadComponent = ({ classes, data, config }) => {

    return (
        <div style={{height:"600px"}}>
            LOOKAHEAD
            <Gantt
                tasks={data}
                config={config}
            />
        </div>
    );

};

export default withStyles(styles)(LookaheadComponent);