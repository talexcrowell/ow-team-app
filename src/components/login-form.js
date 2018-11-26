import React from 'react';
import {connect} from 'react-redux';
import { login } from '../actions/authentication';

class LoginForm extends React.Component {
  onSubmit(e) {
    const user = {
      username: e.target.loginUsername.value,
      password: e.target.loginPassword.value
    };
    console.log(user);
    return this.props.dispatch(login(user.username, user.password));
  }
  render(){
    return (
      <form onSubmit={(e) => {
      e.preventDefault();
      this.onSubmit(e);}}>
        <label>Username</label>
        <input name='loginUsername'></input>
        <label>Password</label>
        <input name='loginPassword'></input>
        <button>Login</button>
      </form>
    )
  }
}

export default connect()(LoginForm);