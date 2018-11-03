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
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
    fixedFooter: {
        position: 'fixed',
        left:'0px',
        bottom: '0px',
        borderTop: '1px solid #d7d7d7',
        width: '100%',
        zIndex: 1002
    },
});

const AnalyticsComponent = ({ classes, activeTab, visibleTabs, changeTab, timeChart, depthChart, productiveNptChart, productiveNptRatioChart,
                            ropChart, nptCategoryChart, iltCategoryChart, dailyCostChart, weeklyCostChart, predictedCostChart, vendorCostChart,
                            phaseCostChart, hseChart}) => {

    let yesterdaysDate = new Date();
    yesterdaysDate.setDate(new Date().getDate() - 1);

    return (
        <div>
            <Hidden smDown implementation="css">
                <Paper>
                    <Tabs
                        value={activeTab}
                        onChange={changeTab}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        {visibleTabs[0] && <Tab label="Operations" icon={<ShowChart />}/> }
                        {visibleTabs[1] && <Tab label="Costs" icon={<AttachMoney />}/> }
                        {visibleTabs[2] && <Tab label="HSE" icon={<Icon>favorite</Icon>}/> }
                    </Tabs>
                </Paper>
                <br />
            </Hidden>
            <Hidden mdUp implementation="css" className={classes.fixedFooter}>
                <BottomNavigation
                    value={activeTab}
                    onChange={changeTab}
                    showLabels
                >
                    {visibleTabs[0] && <BottomNavigationAction label="Operations" icon={<ShowChart />} /> }
                    {visibleTabs[1] && <BottomNavigationAction label="Costs" icon={<AttachMoney />} /> }
                    {visibleTabs[2] && <BottomNavigationAction label="HSE" icon={<Icon>favorite</Icon>} /> }
                </BottomNavigation>
            </Hidden>

            {activeTab === 0 &&
                <Grid container spacing={16}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                Time Chart
                            </Typography>
                            <hr/>
                            <PlotlyChart
                                data={timeChart}
                                layout={{
                                    xaxis: {
                                        title: 'Hours'
                                    },
                                    yaxis: {
                                        title: 'Step',
                                        autorange: 'reversed'
                                    },
                                    legend: {
                                        orientation: 'h',
                                        y: -0.25
                                    },
                                    margin: {
                                        l: 40,
                                        b: 70,
                                        t: 20,
                                        r: 0
                                    },
                                    autosize: true,
                                }}
                                useResizeHandler={true}
                                style={{width: "100%", height: "100%"}}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                Depth Chart
                            </Typography>
                            <hr/>
                            <PlotlyChart
                                data={depthChart}
                                layout={{
                                    xaxis: {
                                        title: 'Hours'
                                    },
                                    yaxis: {
                                        title: 'Depth',
                                        autorange: 'reversed'
                                    },
                                    legend: {
                                        orientation: 'h',
                                        y: -0.25
                                    },
                                    margin: {
                                        l: 40,
                                        b: 70,
                                        t: 20,
                                        r: 0
                                    },
                                    autosize: true,
                                }}
                                useResizeHandler={true}
                                style={{width: "100%", height: "100%"}}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                Productive vs NPT
                            </Typography>
                            <hr/>
                            <PlotlyChart
                                data={productiveNptChart}
                                layout={{
                                    barmode: 'stack',
                                    xaxis: {
                                        title: ''
                                    },
                                    yaxis: {
                                        title: 'Time (hr)',
                                    },
                                    legend: {
                                        orientation: 'h',
                                        y: -0.25
                                    },
                                    margin: {
                                        l: 40,
                                        b: 70,
                                        t: 20,
                                        r: 0
                                    },
                                    autosize: true,
                                }}
                                useResizeHandler={true}
                                style={{width: "100%", height: "100%"}}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                Ratio NPT - Productive
                            </Typography>
                            <hr/>
                            <PlotlyChart
                                data={productiveNptRatioChart}
                                layout={{
                                    legend: {
                                        orientation: 'h',
                                        y: -0.15
                                    },
                                    margin: {
                                        l: 40,
                                        b: 10,
                                        t: 20,
                                        r: 0
                                    },
                                    autosize: true,
                                }}
                                useResizeHandler={true}
                                style={{width: "100%", height: "100%"}}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                ROP per phase
                            </Typography>
                            <hr/>
                            <PlotlyChart
                                data={ropChart}
                                layout={{
                                    legend: {
                                        orientation: 'h',
                                        y: -0.15
                                    },
                                    yaxis: {
                                        title: 'ft/hr',
                                    },
                                    margin: {
                                        l: 40,
                                        b: 10,
                                        t: 20,
                                        r: 0
                                    },
                                    autosize: true,
                                }}
                                useResizeHandler={true}
                                style={{width: "100%", height: "100%"}}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                NPT Categories
                            </Typography>
                            <hr/>
                            <PlotlyChart
                                data={nptCategoryChart}
                                layout={{
                                    legend: {
                                        orientation: 'h',
                                        y: -0.15
                                    },
                                    yaxis: {
                                        title: 'Time (hr)',
                                    },
                                    margin: {
                                        l: 40,
                                        b: 10,
                                        t: 20,
                                        r: 0
                                    },
                                    autosize: true,
                                }}
                                useResizeHandler={true}
                                style={{width: "100%", height: "100%"}}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                ILT Categories
                            </Typography>
                            <hr/>
                            <PlotlyChart
                                data={iltCategoryChart}
                                layout={{
                                    legend: {
                                        orientation: 'h',
                                        y: -0.15
                                    },
                                    yaxis: {
                                        title: 'Time (hr)',
                                    },
                                    margin: {
                                        l: 40,
                                        b: 25,
                                        t: 20,
                                        r: 0
                                    },
                                    autosize: true,
                                }}
                                useResizeHandler={true}
                                style={{width: "100%", height: "100%"}}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            }
            {activeTab === 1 &&
                <Grid container spacing={16}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="headline" component="h2">
                                    Daily Costs - {yesterdaysDate.toLocaleDateString("en-US")}
                                </Typography>
                                <hr/>
                                <PlotlyChart
                                    data={dailyCostChart}
                                    layout={{
                                        legend: {
                                            orientation: 'h',
                                            y: 0.0
                                        },
                                        margin: {
                                            l: 10,
                                            b: 10,
                                            t: 10,
                                            r: 10
                                        },
                                        autosize: true,
                                    }}
                                    useResizeHandler={true}
                                    style={{width: "100%", height: "100%"}}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="headline" component="h2">
                                    Weekly Costs
                                </Typography>
                                <hr/>
                                <PlotlyChart
                                    data={weeklyCostChart}
                                    layout={{
                                        barmode: 'stack',
                                        yaxis: {
                                            'title': 'Total Cost'
                                        },
                                        legend: {
                                            x: 0,
                                            y: 1.1,
                                            orientation: 'h',
                                        },
                                        margin: {
                                            l: 60,
                                            b: 80,
                                            t: 10,
                                            r: 50
                                        },
                                        autosize: true,
                                    }}
                                    useResizeHandler={true}
                                    style={{width: "100%", height: "100%"}}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="headline" component="h2">
                                    Costs per Vendor
                                </Typography>
                                <hr/>
                                <PlotlyChart
                                    data={vendorCostChart}
                                    layout={{
                                        legend: {
                                            orientation: 'h',
                                            y: 0.0
                                        },
                                        yaxis: {
                                            'title': 'Total Cost'
                                        },
                                        margin: {
                                            l: 60,
                                            b: 80,
                                            t: 10,
                                            r: 10
                                        },
                                        autosize: true,
                                    }}
                                    useResizeHandler={true}
                                    style={{width: "100%", height: "100%"}}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="headline" component="h2">
                                    Costs per Phase
                                </Typography>
                                <hr/>
                                <PlotlyChart
                                    data={phaseCostChart}
                                    layout={{
                                        legend: {
                                            orientation: 'h',
                                            y: 0.0
                                        },
                                        yaxis: {
                                            'title': 'Total Cost'
                                        },
                                        margin: {
                                            l: 60,
                                            b: 80,
                                            t: 10,
                                            r: 10
                                        },
                                        autosize: true,
                                    }}
                                    useResizeHandler={true}
                                    style={{width: "100%", height: "100%"}}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            }
            {activeTab === 2 &&
                <Grid container spacing={16}>
                    <Grid item xs={12} md={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="headline" component="h2">
                                    Number of Incidents
                                </Typography>
                                <hr/>
                                <PlotlyChart
                                    data={hseChart}
                                    layout={{
                                        yaxis: {
                                            'title': 'Number of Incidents'
                                        },
                                        showlegend: false,
                                        margin: {
                                            l: 60,
                                            b: 100,
                                            t: 10,
                                            r: 10
                                        },
                                        autosize: true,
                                    }}
                                    useResizeHandler={true}
                                    style={{width: "100%", height: "100%"}}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            }
        </div>
    );

};

export default withStyles(styles)(AnalyticsComponent);