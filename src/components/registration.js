import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import RegistrationForm from './registration-form';
import './registration.css';


function RegistrationPage (props){
  if(props.loggedIn){
    return <Redirect to='/dashboard' />
  }
  
  return (
    <div className='registration'>
      <RegistrationForm />
    </div>
  );
}

function mapStateToProps(state){
  return{
    loggedIn: state.auth.currentUser !== null
  }
};
export default connect(mapStateToProps)(RegistrationPage);