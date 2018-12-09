import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import requiresLogin from '../requires-login';
import { resetUserTeam } from '../actions/user';

export function HeaderBar (props){
  if(!props.loggedIn){
    return(
      <Redirect to='/landing-page' />
    )
  }

  return(
    <section className='headerbar col-12'>
      <h3 aria-level='1' className='col-6'>Welcome {props.currentUser.username}</h3>
      <div className='action-buttons col-6'>
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