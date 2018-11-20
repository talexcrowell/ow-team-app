import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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
      <Link to='/'>Back</Link>
    </div>
  )
}

export default connect()(LoginPage);