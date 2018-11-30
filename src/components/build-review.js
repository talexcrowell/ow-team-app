import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import requiresLogin from '../requires-login';
import ReviewForm from './review-form';
import BarUserTeams from './bar-user-teams';
import './build-review.css';

export class BuildReview extends React.Component{
 render() { 
    if (this.props.savingTeam){
      return(
        <Redirect to='/dashboard' />
      );
    }
    
    return(
      <main role='main' className='team-review'>
        <BarUserTeams />
        <ReviewForm />
      </main>
    )
  }
}

function mapStateToProps(state){
  return{
    userTeams: state.user.teams,
    savingTeam: state.user.loading !== false
  }
}

export default requiresLogin()(connect(mapStateToProps)(BuildReview));