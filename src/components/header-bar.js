import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import requiresLogin from '../requires-login';
import {fetchUserTeams} from  '../actions/user';
import { clearAuthToken } from '../local-storage';
import {clearAuth} from '../actions/authentication';

function HeaderBar (props){
  if(!props.loggedIn){
    return(
      <Redirect to='/landing-page' />
    )
  }

  return(
    <section className='headerbar'>
      <h3>Welcome {props.currentUser.username}</h3>
      <div className='action-buttons'>
        <Link to='/build' ><button className='build'>Build A New Team</button></Link>  
        <button className='logout' onClick={() =>props.logout()}>Logout</button>
      </div>
    </section>
  );
};

function mapPropsToState(state){
  return{
    currentUser: state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null
  }
}
export default requiresLogin()(connect(mapPropsToState)(HeaderBar));