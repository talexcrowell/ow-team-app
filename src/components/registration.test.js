import React from 'react';
import {shallow, mount} from 'enzyme';


import {RegistrationPage} from './registration';

describe('<RegistrationPage />', () => {
  it('Renders without crashing', () => {
    shallow(<RegistrationPage />);
  });

});