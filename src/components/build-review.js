import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import requiresLogin from '../requires-login';
import ReviewForm from './review-form';
import BarUserTeams from './bar-user-teams';
import {resetUserTeam} from '../actions/user';
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
        <Link to='/dashboard'><button onClick={() => this.props.dispatch(resetUserTeam())}>Dashboard</button></Link>
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