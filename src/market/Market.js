/**
 * Created by ilya on 20/04/2017.
 */
import React, { Component } from 'react';
import Chart from '../chart/Chart';
// import axios from 'axios';

class Market extends Component {

    constructor() {
        super();
        this.state = {
            apiLink: ["get_btce"],
            data: [],
            errorMessage: '',
            serverResponse: ''
        };
    }

    componentWillMount(){
        console.log("debug here before fetches");
        this.getApiData();
        console.log("debug here after fetches");
    }
    
    render() {
        return (
            <div >
                <Chart text="example_props" data=""/>
            </div>
        );
    }
    getApiData(data){

    }
}

export default Market;
