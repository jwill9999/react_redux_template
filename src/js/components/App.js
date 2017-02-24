import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import Nav from './Nav/Nav'
require('../../scss/style.scss');



class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Nav />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Root;
