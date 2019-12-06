import React from 'react';
import NavLink from 'react-bootstrap/NavLink';

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
          <h3>Reached profile where details should post</h3>
          <h3> Welcome {this.props.profile.name}</h3>
          <h5>Name: {this.props.profile.name}</h5>
          <h5>Address: {this.props.profile.address}</h5>
        </div>
      </>
    )
  }
  
}

export default Profile;