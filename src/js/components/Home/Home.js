import React from 'react';
import UserList from '../../containers/user-detail';
import UserDetails from '../../containers/user-list';

class Home extends React.Component {
  constructor(props) {
    super()

  }

  render() {

    return (
      <div className="container">
        <h2>User List</h2>
        <UserDetails/>
        <hr/>
        <h2>User Details</h2>
        <UserList/>
      </div>

    )
  }

}

module.exports = Home;