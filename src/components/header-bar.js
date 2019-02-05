import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import requiresLogin from '../requires-login';
import { resetUserTeam } from '../actions/user';
import './header-bar.css';

export function HeaderBar (props){
  if(!props.loggedIn){
    return(
      <Redirect to='/landing-page' />
    )
  }

  return(
    <section className='headerbar'>
      <h3 aria-level='1' className='current-user'>Welcome {props.currentUser.username}</h3>
      <div className='action-buttons'>
        <Link to='/build' ><button className='build' onClick={() => props.dispatch(resetUserTeam())}>Build A New Team</button></Link>  
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