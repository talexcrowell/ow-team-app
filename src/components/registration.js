import React from 'react';
import {connect} from 'react-redux';

function RegistrationForm (props) {
  return (
    <form >
      <label>Email</label>
      <input></input>
      <label>Username</label>
      <input></input>
      <label>Password</label>
      <input></input>
    </form>
  )
}

export default connect()(RegistrationForm);

// https://codesandbox.io/s/6jy2vpqqor
// https://codesandbox.io/s/62k40w0w43