/**
 * Created by ilya on 20/04/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {LineTooltip} from 'react-d3-tooltip';
import axios from 'axios';

class Chart extends React.Component {


    constructor() {
        super();
        this.state = {
            data: [],
            errorMessage: '',
            serverResponse: ''
        };
    }

    componentWillMount(){
        // console.log("debug here before fetches");
        this.getApiData(this.props.data);
        // console.log("debug here after fetches");
    }

    getApiData(data){
        let self = this;
        axios.get(data)
            .then(function (response) {
                let data_response = response.data;
                self.setState({ data: data_response});
            })
            .catch(function (error) {
                console.log('Error', error.message);
                self.setState({errorMessage: error.message});
            });
    }

    getParsedData(data_array, field_x, field_y) {
        let new_data = [];
        for (const currency of data_array){
            currency['time'] = currency[field_x];
            currency['total'] = currency[field_y];
            new_data.push(currency);
        }
        return new_data;
    }

    render() {
        let field_y = this.props.field_y;
        const chartSeries = [
                {
                    field: field_y,
                    name: field_y,
                    color: '#ff7f0e',
                    style: {
                        "stroke-width": 2,
                        "stroke-opacity": .2,
                        "fill-opacity": .2
                    }
                }
            ];
        let data_array = this.getParsedData(this.state.data, this.props.field_x, field_y);
        let width = 1000;
        let height= 500;
        const generalChartData = data_array;
        const yRange = [1300, 0];
        // const margins = {left: 100, right: 100, top: 50, bottom: 50};
        return (
            <div>
                <LineTooltip
                    showXGrid={false}
                    showYGrid={true}
                    title={this.props.title}
                    width={width}
                    height={height}
                    data={generalChartData}
                    chartSeries={chartSeries}
                    x={this.x}
                    yRange={yRange}
                />
            </div>
        );
    }

    x(d){
        return d.time;
    }
    y(d) {
        return d.total;
    }
}
Chart.propTypes = {
    data: PropTypes.string.isRequired,
    field_x: PropTypes.string.isRequired,
    field_y: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
export default Chart;