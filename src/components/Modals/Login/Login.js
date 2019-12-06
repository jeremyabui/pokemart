import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import LoginModal from './LoginModal';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, this.state, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        this.props.setCurrentUser(res.data.data)
        this.props.history.push('/')
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <LoginModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state} />
    )
  }
}

export default withRouter(Login);