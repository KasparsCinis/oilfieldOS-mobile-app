import React, { Component as reduxComponent } from 'react';
import Plot from 'react-plotly.js';

class PlotlyChart extends reduxComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { layout, ...rest } = this.props;

        let config = {
            scrollZoom: window.innerWidth < 960,
            modeBarButtonsToRemove: [
                'sendDataToCloud',
                'zoom2d',
                'lasso2d',
                'autoScale2d',
                'hoverClosestCartesian',
                'hoverCompareCartesian',
                'toggleSpikelines'
            ],
            displaylogo: false
        };

        if (window.innerWidth < 960) {
            config.displayModeBar = false;
        }

        return <Plot
            layout={layout}
            config={config}
            {...rest}
        />
    }
}

export default PlotlyChart;


