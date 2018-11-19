import React from 'react';
import {connect} from 'react-redux';

function LandingPage (props){
  return(
    <div>
      <h2>Overwatch Buddy</h2>
      <div>
        <a href='#'>Login</a>
        <a href='#'>Register</a>
      </div>
    </div>
  )
}

export default connect()(LandingPage);