import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Posts from './pages/Posts';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Inscription from './pages/Inscription';


function Routee() {
  return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/login" component={Login} />
            <Route  path="/inscription" component={Inscription} />
          </Switch>
        </Router>
        
      </div>
  );
}

export default Routee;