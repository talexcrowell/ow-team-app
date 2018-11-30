import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { login } from '../actions/authentication';

export class LoginForm extends React.Component {
  onSubmit(e) {
    const user = {
      username: e.target.loginUsername.value,
      password: e.target.loginPassword.value
    };
    return this.props.dispatch(login(user.username, user.password));
  }
  render(){
    if(this.props.loggedIn){
      return <Redirect to='/dashboard' />
    }
    return (
      <form className='loginform'onSubmit={(e) => {
      e.preventDefault();
      this.onSubmit(e);}}>
        <section className='login-username'>
          <label htmlFor='loginUsername' className='loginUsername-label'>Username</label>
          <input aria-label='loginUsername' name='loginUsername' className='loginUsername-input'></input>
        </section>
        <section className='login-password'>
          <label htmlFor='loginpassword' className='loginPassword-label'>Password</label>
          <input aria-label='loginPassword' name='loginPassword' className='loginPassword-input' type='Password'></input>
        </section>
        <button>Login</button>
      </form>
    )
  }
}

function mapStateToProps(state){
  return{
    loggedIn: state.auth.currentUser !== null
  }
}

export default connect(mapStateToProps)(LoginForm);