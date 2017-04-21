/**
 * Created by ilya on 20/04/2017.
 */
import React from 'react';
// import PropTypes from 'prop-types';
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
                    {/*data='/src/data/user.json'*/}
                    {/*field_x='date' field_y="price"*/}
                    {/*title='Bitstamp bitcoin' />*/}
            </div>
        );
    }

}

export default Market;
