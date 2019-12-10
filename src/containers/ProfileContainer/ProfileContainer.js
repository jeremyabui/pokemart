import React from 'react';
import axios from 'axios';

import Profile from '../../components/Profile/Profile';

class ProfileContainer extends React.Component {
  state = {
    loaded: false,
    profile: {},
  }

  componentDidMount() {
    const userId = localStorage.getItem('uid');
    axios.get(`${process.env.REACT_APP_API_URL}/auth/${userId}`, {
      withCredentials: true
    })
    .then(res => {
      this.setState({
        profile: res.data.data,
        loaded: true
      });
    })
    .catch(err => console.log(err));
  }

  handleUpdate = (event, updatedState) => {
    event.preventDefault();
    const userId = localStorage.getItem('uid');
    // const data = new FormData();
    axios.put(`${process.env.REACT_APP_API_URL}/auth/${userId}`, 
      updatedState, 
      {
        withCredentials: true
      })
      .then(res => {
        this.setState({
          profile: res.data.data
        });
      })
    }
  

  render() {
    return (
      <>
      <div className='profile-container'>
        <h2>Profile</h2>
        <Profile profile={this.state.profile} logout={this.props.logout}/>
      </div>
      </>
    )
  }
}

export default ProfileContainer;