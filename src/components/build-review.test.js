import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

import {BuildReview} from './build-review';

describe('<BuildReview />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <BuildReview />
      </Provider>
    );
  });


});