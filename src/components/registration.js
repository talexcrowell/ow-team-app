import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import RegistrationForm from './registration-form';
import './registration.css';


export function RegistrationPage (props){
  if(props.loggedIn){
    return <Redirect to='/dashboard' />
  }
  
  return (
    <div>
      <h2>Overwatch Buddy</h2>
      <RegistrationForm />
      <Link to='/'>Back</Link> || 
      <Link to='/login'>Already registered?</Link>
    </div>
  );
}

function mapStateToProps(state){
  return{
    loggedIn: state.auth.currentUser !== null
  }
};
export default connect(mapStateToProps)(RegistrationPage);