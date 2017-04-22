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
        if (!this.props.debug) {
            this.getApiData(this.props.url);
            // console.log("debug here after fetches");
        }
        else{
            this.setState({ data: this.props.url});
        }

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

    getMaxValue(array){
        let checkArray = [];
        for (const currency of array){
            checkArray.push(currency['total']);
        }
        let number= Math.max.apply(Math, checkArray);
        if (number === Infinity){
            number = 2000;
        }
        return number;
        }

    getMinValue(array){
        let checkArray = [];
        for (const currency of array){
            checkArray.push(currency['total']);
        }
        let number =  Math.min.apply(Math, checkArray);
        if (isNaN(number)){
            number = 0;
        }
        return number;
    }

    render(){

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
        const max_value = this.getMaxValue(data_array);
        const min_value = this.getMinValue(data_array);
        let width = 700;
        let height= 300;
        // let margins = {left: 100, right: 100, top: 50, bottom: 50};
        // let yDomain = d3.extent(chartData, function(d){ return y(d); });
        console.log(max_value, min_value);
        const yRange =[1300, 50];
        // const margins = {left: 100, right: 100, top: 50, bottom: 50};
        return (
            <div>
                <LineTooltip
                    key={data_array.toString()}
                    showXGrid={false}
                    showYGrid={false}
                    title={this.props.title}
                    data={data_array}
                    width={width}
                    height={height}
                    chartSeries={chartSeries}
                    yRange={yRange}
                    x={this.x}
                />
            </div>
        );
    };

    x(d){
        return d.time;
    }
    y(d) {
        return d.total;
    }
}
Chart.propTypes = {
    url: PropTypes.string.isRequired || PropTypes.array.isRequired,
    field_x: PropTypes.string.isRequired,
    field_y: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
export default Chart;