import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import requiresLogin from '../requires-login';
import ReviewForm from './review-form';
import BarUserTeams from './bar-user-teams';
import './build-review.css';

class BuildReview extends React.Component{
 render() {
    if(this.props.savingTeam){
      return (
        <Redirect to='/dashboard' />
      )
    }

    return(
      <div className='team-review'>
        <BarUserTeams />
        <ReviewForm />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    userTeams: state.user.teams,
    currentTeam: state.user.currentTeam,
    savingTeam: state.user.loading !== false
  }
}

export default requiresLogin()(connect(mapStateToProps)(BuildReview));