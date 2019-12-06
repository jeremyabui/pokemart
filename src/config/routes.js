import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Container Imports
import Home from '../components/Home/Home'
import Register from '../components/Modals/Register/Register'
import Login from '../components/Modals/Login/Login'
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer'
import EditProfile from '../components/EditProfile/EditProfile'


export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path="/register" component={Register} />
    <Route
      path="/login"
      render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    />
    
    <Route path="/profile" component={ProfileContainer} />
    <Route path="/editprofile" component={EditProfile} />
  </Switch>
)