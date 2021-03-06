import React from 'react';
import { Link } from 'react-router-dom';

import DeleteUser from '../Modals/DeleteUser/DeleteUser'

class Profile extends React.Component {

  handleChange = (event) => {
    this.ListeningStateChangedEvent({
      [event.target.name]: event.target.value,
    })
  }
  
  render () {
    return (
      <>
        <div className="profileInfo">
          <h3> Welcome {this.props.profile.name}!</h3>
          <h5>Name: {this.props.profile.name}</h5>
          <h5>Address: {this.props.profile.address}</h5>
          <h5>City: {this.props.profile.city}</h5>
          <h5>State: {this.props.profile.state}</h5>
          <h5>Zipcode: {this.props.profile.zipcode}</h5>
          <div className='profileButtons'>
            <Link to='/editprofile'><button className='btn btn-warning editProfileButton'>Edit Profile</button></Link>
            <DeleteUser logout={this.props.logout}/>
          </div>
        </div>
      </>
    )
  }
  
}

export default Profile;