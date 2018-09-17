import React from 'react';
import Plot from 'react-plotly.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const AnalyticsComponent = ({ timeChart, depthChart, productiveNptChart, productiveNptRatioChart, nptSpreadChart,
                            ropChart, nptCategoryChart, iltCategoryChart }) => {

    return (
        <Grid container spacing={16}>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            Time Chart
                        </Typography>
                        <hr />
                        <Plot
                            data={timeChart}
                            layout={{
                                xaxis: {
                                    title:'Hours'
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
                            style={{ width: "100%", height: "100%" }}
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
                        <hr />
                        <Plot
                            data={depthChart}
                            layout={{
                                xaxis: {
                                    title:'Hours'
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
                            style={{ width: "100%", height: "100%" }}
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
                        <hr />
                        <Plot
                            data={productiveNptChart}
                            layout={{
                                barmode: 'stack',
                                xaxis: {
                                    title:''
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
                            style={{ width: "100%", height: "100%" }}
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
                        <hr />
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
                            style={{ width: "100%", height: "100%" }}
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
                        <hr />
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
                            style={{ width: "100%", height: "100%" }}
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
                        <hr />
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
                            style={{ width: "100%", height: "100%" }}
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
                        <hr />
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
                            style={{ width: "100%", height: "100%" }}
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
                        <hr />
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
                            style={{ width: "100%", height: "100%" }}
                        />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );

};

export default AnalyticsComponent;