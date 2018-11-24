import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { registerUser } from '../actions/user';
import { login } from '../actions/authentication';

class RegistrationForm extends React.Component {
  onSubmit(e) {
    const newUser = {
      username: e.target.regUsername.value,
      email: e.target.regEmail.value,
      password: e.target.regPassword.value
    };
    return this.props.dispatch(registerUser(newUser))
      .then(() => this.props.dispatch(login(newUser.username, newUser.password)));
  }
  
  render() {

    return (
      <div>
        <h2>Overwatch Buddy</h2>
        <form onSubmit={(e)=> {
          e.preventDefault();
          this.onSubmit(e);
          }}>
          <h3>Register</h3>
          <label htmlFor='regEmail'>Email</label>
          <input type='text' name='regEmail'></input> <br/>
          <label htmlFor='regUsername'>Username</label>
          <input type='text' name='regUsername' plac></input> <br/>
          <label htmlFor='regPassword'>Password</label>
          <input type='password' name='regUsername'></input> <br/>
          <button type='submit'>Register</button>
        </form>
        <Link to='/'>Back</Link> || 
        <Link to='/login'>Already registered?</Link>
      </div>
    )
  }
}

export default connect()(RegistrationForm);

// https://codesandbox.io/s/6jy2vpqqor
// https://codesandbox.io/s/62k40w0w43