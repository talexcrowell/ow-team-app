import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import requiresLogin from '../requires-login';
import ViewForm from './view-form';
import BarUserTeams from './bar-user-teams';
import {resetUserTeam} from '../actions/user';
import './build-review.css';

export class BuildView extends React.Component {
  
  render(){
    if(!this.props.loggedIn){
      return(
        <Redirect to='/landing-page' />
      )
    }
    return(
      <main role='main' className='team-review'>
        <img className='logo' src={process.env.PUBLIC_URL + '/resources/overwatch-buddy-logo.png'} alt='Overwatch Buddy logo'></img>
        <Link to='/dashboard'><button className='dash-button' onClick={() => this.props.dispatch(resetUserTeam())}>Dashboard</button></Link>      
        <BarUserTeams />
        <ViewForm />
      </main>
    )
  }
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