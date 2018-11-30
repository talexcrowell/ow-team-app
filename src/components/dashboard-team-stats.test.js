import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

import {DashboardTeamStats} from './dashboard-team-stats';

describe('<DashboardTeamStats />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <DashboardTeamStats />
      </Provider>
    );
  });

});