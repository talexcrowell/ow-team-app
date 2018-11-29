import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import requiresLogin from '../requires-login';
import ViewForm from './view-form';
import BarUserTeams from './bar-user-teams';
import './build-review.css';

function BuildView (props) {

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
    teamCollective: state.user.teamCollective

  }
}

export default requiresLogin()(connect(mapStateToProps)(BuildView));