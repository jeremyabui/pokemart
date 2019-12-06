import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom'

// Internal Modules
// import Navbar from './components/Navbar/Navbar'

// CSS
import './App.css';
import NavbarComponent from './components/Navbar/Navbar';


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



  render() {
    return (
      <>
        <NavbarComponent />
      </>
    );
  }
}

export default App;
