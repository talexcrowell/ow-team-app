import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import TeamBuild from './components/team-build';

ReactDOM.render(
  <Provider store={store}>
    <TeamBuild />
  </Provider>, 
  document.getElementById('root'));
serviceWorker.unregister();
