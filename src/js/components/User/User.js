import React from 'react';
import {browserHistory} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import './User.scss';


const style = {
  marginTop: 12,
};

class User extends React.Component {
    onNavigateHome() {
        browserHistory.push("/home");
    }

    render() {
        return (
            <MuiThemeProvider >
            <div className="container">
                <div className='row'>
                    <div className="col-md-6 col-md-offset-3">
                        <h1>The User Page</h1>
                        <h3>User ID: {this.props.params.id}</h3>
                        <RaisedButton onClick={this.onNavigateHome} label="Go Home!" primary={true} style={style} />  
                    </div>
                </div>
            </div>
            </MuiThemeProvider >

        );
    }
}

module.exports = User;