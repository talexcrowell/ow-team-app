import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import requiresLogin from '../requires-login';
import ViewForm from './view-form';
import BarUserTeams from './bar-user-teams';
import './build-review.css';

export function BuildView (props) {
  if(!props.loggedIn){
    return(
      <Redirect to='/landing-page' />
    )
  }
  return(
    <main role='main' className='team-review'>
      <BarUserTeams />
      <ViewForm />
    </main>
  )
}

function mapStateToProps(state){
  return{
    userTeams: state.user.teams,
    currentTeam: state.user.currentTeam,
    teamCollective: state.user.teamCollective,
    loggedIn: state.auth.currentUser !== null
  }
}

export default requiresLogin()(connect(mapStateToProps)(BuildView));