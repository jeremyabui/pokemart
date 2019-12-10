import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Container Imports
import Home from '../components/Home/Home'
import Register from '../components/Modals/Register/Register'
import Login from '../components/Modals/Login/Login'
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer'
import EditProfile from '../components/EditProfile/EditProfile'
import MallContainer from '../containers/MallContainer/MallContainer'

import ProductDetails from '../components/ProductDetails/ProductDetails'
// import ProductDetailsContainerNew from '../containers/ProductDetailsContainer/ProductDetailsContainer'

import ShoppingCartContainer from '../containers/ShoppingCartContainer/ShoppingCartContainer';
import OrderConfirmation from '../components/OrderConfirmation/OrderConfirmation'

export default ({ currentUser, setCurrentUser, logout }) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route 
      path="/register" 
      render={() => (
        <Register currentUser={currentUser} setCurrentUser={setCurrentUser}/> 
      )}
    />
    <Route
      path="/login"
      render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    />
    
    <Route 
      path="/profile" 
      render={() => (
        <ProfileContainer logout={logout}/>
      )}
      />
    <Route path="/editprofile" component={EditProfile}  />


    <Route exact path="/mall" component={MallContainer} />

    <Route path='/mall/:id' component={ProductDetails} />

    <Route path='/cart' component={ShoppingCartContainer} />

    <Route path='/orderconfirmation' component={OrderConfirmation} />
  </Switch>
)