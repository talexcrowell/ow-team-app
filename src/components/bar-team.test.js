import React from 'react';
import {shallow, mount} from 'enzyme';

import BarTeam from './bar-team';

describe('<BarTeam/>', () => {
  it('Renders without crashing', () => {
      shallow(<BarTeam />);
  });
});