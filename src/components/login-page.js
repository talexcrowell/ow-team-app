import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';

function LoginPage (props) {
  if(props.loggedIn){
    return <Redirect to='/dashboard' />
  }

  return (
    <div>
      <h2>Overwatch Buddy</h2>
      <LoginForm />
      <Link to='/'>Back</Link>
    </div>
  )
}

function mapStateToProps(state){
  return{
    loggedIn: state.auth.currentUser !== null
  }
}


export default connect(mapStateToProps)(LoginPage);