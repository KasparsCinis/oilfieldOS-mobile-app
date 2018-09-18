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

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ShowChart from '@material-ui/icons/ShowChart';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Check from '@material-ui/icons/Check';

const styles = theme => ({
    fixedFooter: {
        position: 'fixed',
        left:'0px',
        bottom: '0px',
        borderTop: '1px solid #d7d7d7',
        width: '100%',
        zIndex: 10
    },
});

const AnalyticsComponent = ({ classes, activeTab, changeTab, timeChart, depthChart, productiveNptChart, productiveNptRatioChart, nptSpreadChart,
                            ropChart, nptCategoryChart, iltCategoryChart, dailyCostChart, weeklyCostChart, predictedCostChart, vendorCostChart,
                            phaseCostChart, actionsChart}) => {

    let yesterdaysDate = new Date();
    yesterdaysDate.setDate(new Date().getDate() - 1);

    return (
        <div>
            <Hidden mdDown implementation="css">
                <Paper>
                    <Tabs
                        value={activeTab}
                        onChange={changeTab}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Operations" icon={<ShowChart />}/>
                        <Tab label="Costs" icon={<AttachMoney />}/>
                        <Tab label="Actions" icon={<Check />}/>
                    </Tabs>
                </Paper>
                <br />
            </Hidden>
            <Hidden smUp implementation="css" className={classes.fixedFooter}>
                <BottomNavigation
                    value={activeTab}
                    onChange={changeTab}
                    showLabels
                >
                    <BottomNavigationAction label="Operations" icon={<ShowChart />} />
                    <BottomNavigationAction label="Costs" icon={<AttachMoney />} />
                    <BottomNavigationAction label="Actions" icon={<Check />} />
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
                            <Plot
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
                            <Plot
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
                            <Plot
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
                            <Plot
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
                                NPT Spread
                            </Typography>
                            <hr/>
                            <Plot
                                data={nptSpreadChart}
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
                                ROP (ft/hr) per phase
                            </Typography>
                            <hr/>
                            <Plot
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
                            <Plot
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
                            <Plot
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
                                <Plot
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
                                <Plot
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
                                <Plot
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
                                <Plot
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
                                    Actions per User
                                </Typography>
                                <hr/>
                                <Plot
                                    data={actionsChart}
                                    layout={{
                                        yaxis: {
                                            'title': 'Number of Actions'
                                        },
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