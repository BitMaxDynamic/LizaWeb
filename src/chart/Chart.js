/**
 * Created by ilya on 20/04/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
// import  {LineChart} from 'react-d3-basic';
import {LineTooltip} from 'react-d3-tooltip';

class Chart extends React.Component {


    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        const chartSeries = [
                {
                    field: 'age',
                    name: 'Age',
                    color: '#ff7f0e',
                    style: {
                        "stroke-width": 2,
                        "stroke-opacity": .2,
                        "fill-opacity": .2
                    }
                }
            ]
        const generalChartData = require('./user.json');
        return (
            <div>
                <h1>H1 Header {this.props.text}</h1>
                <LineTooltip
                    width={1000}
                    height={500}
                    data={generalChartData}
                    chartSeries={chartSeries}
                    x={this.x}
                />
            </div>
        );
    }
    x(d){
        return d.index
    }

}
Chart.propTypes = {
    text: PropTypes.string.isRequired,
};
export default Chart;