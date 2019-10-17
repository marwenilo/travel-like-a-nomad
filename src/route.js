import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Login from './pages/Login';
import Inscription from './pages/Inscription';

function Routee() {
  return (
      <div>
        <Router>
        
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/login" component={Login} />
            <Route  path="/inscription" component={Inscription} />
          </Switch>
        </Router>
        
      </div>
  );
}

export default Routee;