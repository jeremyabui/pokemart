import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';

import Register from '../Modals/Register/Register';
import Login from '../Modals/Login/Login';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import ProfileContainer from '../../containers/ProfileContainer/ProfileContainer'
// CSS
import './Navbar.css'

// NOTE uncomment out once set up
class NavbarContainer extends Component {
  
  render () {
    console.log(this.props)
    return (
      <header>

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href='/' >PokeMart</Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>

          <Nav className="ml-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            {/* <Nav.Link href="#features">Login</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}

            {!this.props.currentUser ? 
              <>
                <Login currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser}/>
                <Register />
              </>
            :
              <>
                <Link to='/cart'><i class="fa fa-shopping-cart fa-3x " aria-hidden="true"></i></Link>
                <NavLink className="nav-link" to="/profile"><button>Profile</button></NavLink>
                <button onClick={this.props.logout}>Logout</button>
              </>
            }
          </Nav>
    
        </Navbar>
        <br />
      </header>
    );
  };
};

export default NavbarContainer;