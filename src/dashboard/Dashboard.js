/**
 * Created by Radu on 4/22/2017.
 */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import './Dashboard.css'
import TextField from 'material-ui/TextField'
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {orange500, blue500} from 'material-ui/styles/colors';
injectTapEventPlugin();
const styles = {
    errorStyle: {
        color: orange500,
    },
    underlineStyle: {
        borderColor: orange500,
    },
    floatingLabelStyle: {
        color: orange500,
    },
    floatingLabelFocusStyle: {
        color: blue500,
    },
};
class Dashboard extends React.Component {



    render() {
        return (
            <div>

                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <AppBar title="My AppBar" />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <TextField
                        floatingLabelText="Styled Floating Label Text"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    />
                </MuiThemeProvider>


            </div>
        );
    }


}
export default Dashboard;