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
    console.log(newUser);
    return this.props.dispatch(registerUser(newUser))
      .then(() => this.props.dispatch(login(newUser.username, newUser.password)));
  }
  
  
  render() {

    return (
      <div>
        <h2>Overwatch Buddy</h2>
        <form className='regForm' onSubmit={(e)=> {
          e.preventDefault();
          this.onSubmit(e);
          }}>
          <h3>Register</h3>
          <label htmlFor='regEmail'>Email</label>
          <input type='text' name='regEmail'></input> <br/>
          <label htmlFor='regUsername'>Username</label>
          <input type='text' name='regUsername'></input> <br/>
          <label htmlFor='regPassword'>Password</label>
          <input type='password' name='regPassword'></input> <br/>
          <button>Register</button>
        </form>
        <Link to='/'>Back</Link> || 
        <Link to='/login'>Already registered?</Link>
      </div>
    )
  }
}

const mapPropsToState = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapPropsToState)(RegistrationForm);

// https://codesandbox.io/s/6jy2vpqqor
// https://codesandbox.io/s/62k40w0w43