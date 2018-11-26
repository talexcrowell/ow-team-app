import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { registerUser } from '../actions/user';
import { login } from '../actions/authentication';
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
      .then(() => this.props.dispatch(login(newUser.username, newUser.password)));
  }
  
  
  render() {

    return (
      <form className='regForm' onSubmit={(e)=> {
        e.preventDefault();
        this.onSubmit(e);
        }}>
        <h2>OverwatchBuddy</h2>
        <h3>Registration</h3>
        <label htmlFor='regEmail'>Email</label>
        <input type='text' name='regEmail'></input>
        <label htmlFor='regUsername'>Username</label>
        <input type='text' name='regUsername'></input> <br/>
        <label htmlFor='regPassword'>Password</label>
        <input type='password' name='regPassword'></input> <br/>
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