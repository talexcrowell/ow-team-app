import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

import {TeamBuild} from './team-build';

describe('<TeamBuild />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <TeamBuild />
      </Provider>
    );
  });

});