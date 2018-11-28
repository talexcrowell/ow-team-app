import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import TeamBuild from './components/team-build';
import LandingPage from './components/landing-page';
import LoginPage from './components/login-page';
import Dashboard from './components/dashboard';
import RegistrationPage from './components/registration-form';
import BuildReview from './components/build-review';

class App extends Component {
 
  render() {
    return (
      <Router>  
        <div className="App" >
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/register" component ={RegistrationPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/build" component={TeamBuild} />
            <Route exact path="/review" component={BuildReview}/>
          </Switch>
        </div>
      </Router>
      );
  }
}

export default App;
