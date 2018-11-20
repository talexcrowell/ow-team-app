import React from 'react';
import {connect} from 'react-redux';

function LoginPage (props) {
  return (
    <div>
      <h2>Overwatch Buddy</h2>
      <div>
        <label>Username</label>
        <input></input>
        <label>Password</label>
        <input></input>
      </div>
    </div>
  )
}

export default connect()(LoginPage);