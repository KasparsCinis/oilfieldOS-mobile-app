import React from 'react';
import Plot from 'react-plotly.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const AnalyticsComponent = ({ timeChart }) => {

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        Time Chart
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
        </div>
    );

};

export default AnalyticsComponent;