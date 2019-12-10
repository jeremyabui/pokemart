import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

// React bootstrap imports
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function RegisterModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
          <div className="col">
            <form onSubmit={props.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="name" name="name" value={props.user.name} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={props.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={props.user.email} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={props.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={props.user.password} />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input onChange={props.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={props.user.password2} />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="address" name="address" value={props.user.address} />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="city" name="city" value={props.user.city} />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="state" name="state" value={props.user.state} />
              </div>
              {/* <div className="form-group">
                <label htmlFor="zipcode">Zipcode</label>
                <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="zipcode" name="zipcode" value={props.user.zipcode} />
              </div> */}
              {/* <Link to='/mall'> */}
                {/* <button id="register-button" onClick={handleClose} className="btn btn-primary" type="submit">Register</button> */}
                <button id="register-button" className="btn btn-primary" type="submit">Register</button>
              {/* </Link> */}
            </form>
          </div>
        </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default withRouter(RegisterModal);