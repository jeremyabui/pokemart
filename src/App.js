import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'
import axios from 'axios';

// Internal Modules
import Routes from './config/routes';
import NavbarContainer from './components/Navbar/Navbar';
// import Navbar from './components/Navbar/Navbar'

// CSS
import './App.css';

import Home from './components/Home/Home'
import ProfileContainer from './containers/ProfileContainer/ProfileContainer'

// Axios
// import axios from 'axios';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid')
  };

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId});
    localStorage.setItem('uid', userId);
  };

  logout = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/auth/logout`, {
      withCredentials: true
    })
      .then(res => {
        localStorage.removeItem('uid');
        this.setState({ currentUser: null });
        this.props.history.push('/');
    })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <NavbarContainer currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} logout={this.logout}/>
        {/* <Home /> */}
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} logout={this.logout} />
      </>
    );
  }
}

export default withRouter(App);
