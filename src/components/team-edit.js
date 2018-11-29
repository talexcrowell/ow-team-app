import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import requiresLogin from '../requires-login';
import EditForm from './edit-form';
import './build-review.css';

function BuildEdit (props) {

  if(props.savingTeam){
    return (
      <Redirect to='/dashboard' />
    )
  }

  const teamImages = props.userTeams.reduce((images, team) => {
    return [...team.team.map(hero => <li key={hero.heroName} className='bar-hero'>
                                      <img src={hero.image} alt={hero.heroName} className='bar-hero-image'></img>
                                    </li>)];
  }, []);

  const userTeams = props.userTeams.map((team, index) => (
    <li key={index}>
      <section className='bar-team'>
        <label className='bar-team-name'>{team.name}</label>
        <ul className='bar-team-roster'>{teamImages}</ul>
      </section>
    </li>
  ));

  return(
    <div className='team-review'>
      <section className="userteams-build">
        <Link to='/dashboard'><button>Dashboard</button></Link>
        <label className='your-build'>Your Builds</label>
        <ul>{userTeams}</ul>
      </section>
      <EditForm />
    </div>
  )
}

function mapStateToProps(state){
  return{
    userTeams: state.user.teams,
    currentTeam: state.user.currentTeam,
    savingTeam: state.user.loading !== false
  }
}

export default requiresLogin()(connect(mapStateToProps)(BuildEdit));