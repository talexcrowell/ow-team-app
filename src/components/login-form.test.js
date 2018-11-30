import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

import {LoginForm} from './login-form';

describe('<LoginForm />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  });

});