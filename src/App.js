import React, { Component } from 'react';

import './App.css';
import TeamBuild from './components/team-build';
import LandingPage from './components/landing-page';
import InfoPage from './components/info-page';
import LoginPage from './components/login-page';

class App extends Component {
  render() {
    return (
      <div className="App">
          <LandingPage />
          <InfoPage />
          <LoginPage />
          <TeamBuild />
      </div>
    );
  }
}

export default App;
