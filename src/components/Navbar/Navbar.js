import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';

import Register from '../Modals/Register/Register';
import Login from '../Modals/Login/Login';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
// CSS
import './Navbar.css'

// NOTE uncomment out once set up
class NavbarComponent  extends Component {
  render () {
    return (
      <header>
        {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">PokeMart</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav ml-auto">
                {!this.props.currentUser ? 
                <>
                  <li className="nav-item" id='login-button'>
                    <NavLink id="login" className="nav-link" data-toggle="modal" data-target="#exampleModal2" to="/login">Login</NavLink>
                    <Login />
                  </li>
                  <li className="nav-item" id='register-button'>
                    <Register />
                    <NavLink id="register" className="nav-link" data-toggle="modal" data-target="#exampleModal" to='/register'>Register</NavLink>
                  </li>
                </> 
                : 
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" exact to="/cities">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink data-toggle="modal" onClick={this.props.logout} className="nav-link" to="/">Logout</NavLink>
                    </li>
                  </>
                }
              </ul>
              <Modal currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser}/>
            </div>
          </div>
        </nav> */}

{/* react bootstrap header
 */}
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">PokeMart</Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    <Nav className="ml-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link> */}
      {/* <Nav.Link href="#features">Login</Nav.Link> */}
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      <Login />
      <Register />
    </Nav>
    
  </Navbar>
  <br />
</>
      </header>
    );
  };
};

export default NavbarComponent;