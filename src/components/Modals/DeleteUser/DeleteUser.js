import React from 'react';
import {withRouter } from 'react-router-dom';
import axios from 'axios';

import DeleteUserModal from './DeleteUserModal';

class DeleteUser extends React.Component {
  handleDelete = (event, deletedUser) => {
    let userId = localStorage.getItem('uid');
    event.preventDefault();
    axios.delete(`${process.env.REACT_APP_API_URL}/auth/${userId}`, { withCredentials: true})
      .then((res) => {
        console.log(res)
        this.props.history.push('/')
      })
      .catch((err)=> console.log(err));
  }

  render() {
    return(
      <div>
        <DeleteUserModal handleDelete={this.handleDelete} />
      </div>
    )
  }

}

export default withRouter(DeleteUser); 