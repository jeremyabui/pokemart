import React from 'react';
import {withRouter} from 'react-router-dom'

// form
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';


class UpdateProfile extends React.Component {
  state = {
    name: '',
    password: '',
    // password2: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
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
      .catch(err => console.log(err));
    }

  // handleUpdate = (event) => {
  //   event.preventDefault();
  //   const userId = localStorage.getItem('uid');
  //   let newObj = Object.assign({}, this.state);
  //   axios.put(`${process.env.REACT_APP_API_URL}/auth/${userId}`, newObj, {
  //     withCredentials: true,
  //   })
  //     .then((res) => {
  //       this.props.setCurrentUser(res.data.data)
  //     })
  //     .catch((err) => console.log(err));
  // }

// Regular bootstrap
  render () {
    return (
      <div className="container">
        <form onSubmit={this.handleUpdate}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="name" name="name" value={this.state.name} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
          </div>
          {/* <div className="form-group">
            <label htmlFor="password2"> Confirm Password</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={this.state.password2} />
          </div> */}
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="address" name="address" value={this.state.address} />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="city" name="city" value={this.state.city} />
          </div>
          <div className="form-group">
            <label htmlFor="zipcode">Zipcode</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="zipcode" name="zipcode" value={this.state.zipcode} />
          </div>
          <button type="submit" className="btn btn-success float-right">Update</button> 
        </form>
      </div>
    )
  }
  

  // render () {
  //   return (
  //   <Form onSubmit={this.handleUpdate}>
  //     <Form.Group value={this.state.address}>
  //       <Form.Label>Address</Form.Label>
  //       <Form.Control type="address" placeholder="Enter address" />
  //       <Form.Text className="text-muted">
  //         We'll never share your email with anyone else.
  //       </Form.Text>
  //     </Form.Group>

  //     <Form.Group controlId="formBasicPassword">
  //       <Form.Label>Password</Form.Label>
  //       <Form.Control type="password" placeholder="Password" />
  //     </Form.Group>
  //     <Form.Group controlId="formBasicCheckbox">
  //       <Form.Check type="checkbox" label="Check me out" />
  //     </Form.Group>
  //     <Button variant="primary" type="submit">
  //       Submit
  //     </Button>
  //   </Form>
  //   )
  // }


}

export default withRouter(UpdateProfile);