import React from 'react';
import {shallow, mount} from 'enzyme';


import {BuildView} from './team-view';

describe('<BuildView />', () => {
  it('Renders without crashing', () => {
    shallow(<BuildView />);
  });

});