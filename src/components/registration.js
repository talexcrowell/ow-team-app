import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import RegistrationForm from './registration-form';
import './registration.css';


export function RegistrationPage (props){
  if(props.loggedIn){
    return <Redirect to='/dashboard' />
  }

  return (
    <div role='main' className='registration'>
      <RegistrationForm />
    </div>
  );
}

function mapStateToProps(state){
  return{
    loggedIn: state.auth.currentUser !== null,
    error: state.auth.error
  }
};
export default connect(mapStateToProps)(RegistrationPage);