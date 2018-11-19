import React, { Component } from 'react';

import './App.css';
import TeamBuild from './components/team-build';
import LandingPage from './components/landing-page';
import InfoPage from './components/info-page';

class App extends Component {
  render() {
    return (
      <div className="App">
          <LandingPage />
          <InfoPage />
          <TeamBuild />
      </div>
    );
  }
}

export default App;
