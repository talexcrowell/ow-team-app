import React, { Component } from 'react';

import './App.css';
import TeamBuild from './components/team-build';
import LandingPage from './components/landing-page';

class App extends Component {
  render() {
    return (
      <div className="App">
          <LandingPage />
          <TeamBuild />
      </div>
    );
  }
}

export default App;
