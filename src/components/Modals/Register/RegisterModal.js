import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

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
              <button id="register-button" onClick={handleClose} className="btn btn-primary" type="submit">Register</button>
            </form>
          </div>
        </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default withRouter(RegisterModal);