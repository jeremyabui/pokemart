import React from 'react';
import axios from 'axios';

import RegisterModal from './RegisterModal';

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <RegisterModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state} />
    )
  }
}

export default Register;