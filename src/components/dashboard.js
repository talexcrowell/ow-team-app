import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import requiresLogin from '../requires-login';
import {fetchUserTeams} from  '../actions/user';
import { clearAuthToken } from '../local-storage';
import {clearAuth} from '../actions/authentication';
import HeaderBar from './header-bar';
import './dashboard.css';
import DashboardTeams from './dashboard-teams';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUserTeams());
  }

  logout() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }


  render() {
    if(!this.props.loggedIn){
      return(
        <Redirect to='/landing-page' />
      )
    }

    return(
      <main role='main' className='dashboard col-12'>
        <HeaderBar logout={()=>this.logout()} />
        <br/>
        <DashboardTeams />
      </main>  
    )
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.auth.currentUser,
    teams: state.user.teams,
    loggedIn: state.auth.currentUser !== null
  }
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard));