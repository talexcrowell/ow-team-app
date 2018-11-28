import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import requiresLogin from '../requires-login';
import ReviewForm from './review-form';
import './build-review.css';

function BuildReview (props) {
  const userTeams = props.userTeams.map((team, index) => (
    <li key={index}>
     <p className='user-team-name'>{team.name}</p> 
    </li>
  ));

  return(
    <div className='team-review'>
      <section className="userteams-build">
        <Link to='/dashboard'><button>Dashboard</button></Link>
        <label className='your-build'>Your Builds</label>
        <ul>{userTeams}</ul>
      </section>
      <ReviewForm />
    </div>
  )
}

function mapStateToProps(state){
  return{
    userTeams: state.user.teams,
    currentTeam: state.user.currentTeam
  }
}

export default requiresLogin()(connect(mapStateToProps)(BuildReview));