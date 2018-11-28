import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import { registerUser } from '../actions/user';
import './registration.css';

class RegistrationForm extends React.Component {
  onSubmit(e) {
    const newUser = {
      username: e.target.regUsername.value,
      email: e.target.regEmail.value,
      password: e.target.regPassword.value
    };
    console.log(newUser);
    return this.props.dispatch(registerUser(newUser))
  }
  
  
  render() {
    if(this.props.loggedIn){
      return <Redirect to='/dashboard' />
    }

    return (
      <form className='regForm' onSubmit={(e)=> {
        e.preventDefault();
        this.onSubmit(e);
        }}>
        <h2>OverwatchBuddy</h2>
        <label className='registration-header'>Registration</label>
        <section className='email'>
          <label htmlFor='regEmail' className='email-label'>Email</label>
          <input type='text' name='regEmail' className='regEmail'></input>
        </section>
        <section className='username'>
          <label htmlFor='regUsername' className='username-label'>Username</label>
          <input type='text' name='regUsername' className='regUsername'></input>
        </section>
        <section className='password'>
          <label htmlFor='regPassword' className='password-label'>Password</label>
          <input type='password' name='regPassword' className='regPassword'></input>
        </section>
        <button>Register</button> <br/>
        <Link to='/'><button>Back</button></Link>
        <Link to='/login'><button>Already registered?</button></Link>
      </form>
    )
  }
}

const mapPropsToState = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapPropsToState)(RegistrationForm);

// https://codesandbox.io/s/6jy2vpqqor
// https://codesandbox.io/s/62k40w0w43