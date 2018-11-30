import React from 'react';
import {shallow, mount} from 'enzyme';
import {Link} from 'react-router-dom';

import {LandingPage} from './landing-page';

describe('<LandingPage />', () => {
  it('Renders without crashing', () => {
      shallow(<LandingPage />);
  });

  it('should render landing page', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.hasClass('landing-page')).toEqual(true);
  });

  it('should render landing page logo', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.contains(<img className='landing-logo' src="https://i.ibb.co/bgNbS1B/overwatch-buddy-logo.png" alt='Overwatch Buddy logo'></img>)).toEqual(true);
  });

  it('should render landing page text', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.contains(<p className='description'>Playing some competitive matches and want to prep a build with your group? Trying to learn and understand the importance of builds in a game? See a build in the pro scene and want to customize it to be your own?</p>)).toEqual(true);
  });

  it('should render login and register button', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.contains(
      <section className='nav-buttons'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/register'><button>Register</button></Link>
      </section>)).toEqual(true);
  });

});