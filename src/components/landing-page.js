import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function LandingPage (props){
  return(
    <div>
      <h2>Overwatch Buddy</h2>
      <div>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/info'>More Info</Link>
      </div>
    </div>
  )
}

export default connect()(LandingPage);