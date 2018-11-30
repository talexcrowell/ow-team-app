import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

import BarUserTeams from './bar-user-teams';

describe('<BarUserTeams/>', () => {
  it('Renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <BarUserTeams />
      </Provider>
    );
  });


});