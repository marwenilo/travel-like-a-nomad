import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';
import Inscription from './pages/Inscription';

function Routee() {
  return (
      <div>
        <Router>
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route  path="/inscription" component={Inscription} />
          </Switch>
        </Router>
        
      </div>
  );
}

export default Routee;