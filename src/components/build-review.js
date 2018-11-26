import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import requiresLogin from '../requires-login';
import ReviewForm from './review-form';

function BuildReview (props) {
  
  return(
    <div>
      <Link to='/dashboard'>Back To Home</Link>
      <h3>Current Team</h3>
      <ReviewForm />
    </div>
  )
}

function mapStateToProps(state){
  return{
    currentTeam: state.user.currentTeam
  }
}

export default requiresLogin()(connect(mapStateToProps)(BuildReview));