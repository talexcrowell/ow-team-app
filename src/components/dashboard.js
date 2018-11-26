import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import requiresLogin from '../requires-login';
import {fetchUserTeams} from  '../actions/user';
import { clearAuthToken } from '../local-storage';
import {clearAuth} from '../actions/authentication';

class Dashboard extends React.Component {
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
    const userTeams = this.props.teams.map((team, index) => (
      <li key={index}>{team}</li>
    ));


    return(
      <div className='dashboard'>
        <h3>Welcome {this.props.currentUser.username}</h3>
        <button onClick={() => this.logout()}>Logout</button>
        <Link to='/build' ><button>Build A New Team</button></Link>
        <section className="user-teams">
          <ul>{userTeams}</ul>
        </section>
      </div>  
    )
  }
}

function mapPropsToState(state){
  return{
    currentUser: state.auth.currentUser,
    teams: state.user.teams,
    loggedIn: state.auth.currentUser !== null
  }
}

export default requiresLogin()(connect(mapPropsToState)(Dashboard));