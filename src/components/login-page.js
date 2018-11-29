import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';
import './login.css';

function LoginPage (props) {
  if(props.loggedIn){
    return <Redirect to='/dashboard' />
  }

  return (
    <section role='main' className='login'>
      <h2 aria-level='1'>Overwatch Buddy</h2>
      <LoginForm />
      <Link to='/'><button>Back</button></Link>
    </section>
  )
}

function mapStateToProps(state){
  return{
    loggedIn: state.auth.currentUser !== null
  }
}


export default connect(mapStateToProps)(LoginPage);