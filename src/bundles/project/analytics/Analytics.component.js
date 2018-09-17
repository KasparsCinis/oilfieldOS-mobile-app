import React from 'react';
import Plot from 'react-plotly.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const AnalyticsComponent = ({ timeChart }) => {

    return (
        <Grid container spacing={16}>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            Time Charts
                        </Typography>
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
        </Grid>
    );

};

export default AnalyticsComponent;