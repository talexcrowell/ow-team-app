import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

import {ViewForm} from './view-form';

describe('<ViewForm />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <ViewForm />
      </Provider>
    );
  });

});