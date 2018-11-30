import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

import {LoginPage} from './login-page';

describe('<LoginPage />', () => {
  it('Renders without crashing', () => {
    shallow(<LoginPage />);
  });

});