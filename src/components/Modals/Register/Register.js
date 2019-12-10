import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

import RegisterModal from './RegisterModal';

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
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
        this.props.setCurrentUser(res.data.data._id);
        this.props.history.push('/mall')
        // axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, 
        // {
        //   email: this.state.email,
        //   password: this.state.password
        // }, {
        //   withCredentials: true,
        // })
        //   .then((res => {
        //     console.log(res)
        //     this.props.setCurrentUser(res.data.data);
        //     this.props.history.push('/mall')
        //   })
        //   .catch((err) => console.log(err))
        //   )
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <RegisterModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state} />
    )
  }
}

export default withRouter(Register);