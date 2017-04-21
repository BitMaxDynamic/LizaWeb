/**
 * Created by ilya on 20/04/2017.
 */
import React from 'react';
// import PropTypes from 'prop-types';
// import data_user from '../data/user.json';
import Chart from '../chart/Chart';

export const BASE_PUBLIC = '/public/api/v1/';
class Market extends React.Component {

    
    render() {
        return (
            <div >
                <Chart
                    data={BASE_PUBLIC.concat('currency/bitstamp')}
                    field_x='date' field_y="price"
                    title='Bitstamp bitcoin' />
                {/*<Chart*/}
                    {/*data={data_user}*/}
                    {/*field_x='date' field_y="price"*/}
                    {/*title='Bitstamp bitcoin' />*/}
            </div>
        );
    }

}

export default Market;
