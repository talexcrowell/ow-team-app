import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

import {DashboardTeams} from './dashboard-teams';

describe('<DashboardTeams />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <DashboardTeams />
      </Provider>
    );
  });

});