import React from 'react';

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
        </div>
      </>
    )
  }
  
}

export default Profile;