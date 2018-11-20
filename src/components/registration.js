import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function RegistrationForm (props) {
  return (
    <div>
      <form >
        <label>Email</label>
        <input></input>
        <label>Username</label>
        <input></input>
        <label>Password</label>
        <input></input>
      </form>
      <Link to='/'>Back</Link>
      <Link to='/login'>Already registered?</Link>
    </div>
  )
}

export default connect()(RegistrationForm);

// https://codesandbox.io/s/6jy2vpqqor
// https://codesandbox.io/s/62k40w0w43