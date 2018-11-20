import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import TeamBuild from './components/team-build';
import LandingPage from './components/landing-page';
import InfoPage from './components/info-page';
import LoginPage from './components/login-page';
import Dashboard from './components/dashboard';
import RegistrationForm from './components/registration'

class App extends Component {
  render() {
    return (
      <Router>  
        <div className="App">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/info" component ={InfoPage} />
            <Route exact path="/register" component ={RegistrationForm} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/dashboard" component={Dashboard} />
            <TeamBuild />
        </div>
      </Router>
      );
  }
}

export default App;
