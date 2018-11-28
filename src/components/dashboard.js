import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import requiresLogin from '../requires-login';
import {fetchUserTeams, viewUserTeam} from  '../actions/user';
import { clearAuthToken } from '../local-storage';
import {clearAuth} from '../actions/authentication';
import HeaderBar from './header-bar';
import './dashboard.css';

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


    const teamSelector = this.props.teams.map(team => {
      return team.team;
    });


    let dmgStats=0;
    for(let i=0; i < teamSelector.length; i++){
      for(let j=0; j< teamSelector[i].length; j++){
        dmgStats += teamSelector[i][j].damage;
      }
    }

    let dpsStats=0;
    for(let i=0; i < teamSelector.length; i++){
      for(let j=0; j< teamSelector[i].length; j++){
        dpsStats += teamSelector[i][j].dps;
      }
    }

    let healthStats=0;
    for(let i=0; i < teamSelector.length; i++){
      for(let j=0; j< teamSelector[i].length; j++){
        healthStats += teamSelector[i][j].health;
      }
    }

    let hpsStats=0;
    for(let i=0; i < teamSelector.length; i++){
      for(let j=0; j< teamSelector[i].length; j++){
        hpsStats += teamSelector[i][j].hps;
      }
    }
  
    const dashStats = <ul className='dash-stats'>
    <li className='dash-stat'>Damage: {dmgStats} </li>
    <li className='dash-stat'>Damage Per Second: {dpsStats}</li>
    <li className='dash-stat'>Health: {healthStats} </li>
    <li className='dash-stat'>Healing Per Second: {hpsStats}</li>
  </ul>


    const images = this.props.teams.reduce((images, team) => {
      return [...team.team.map(hero => <li key={hero.heroName} className='dash-hero'>
                                        <img src={hero.image} alt={hero.heroName} className='dash-hero-image'></img>
                                        <p className='dash-hero-name'>{hero.heroName}</p>
                                      </li>)];
    }, []);

    const userTeams = this.props.teams.map((team, index) => (
      <li key={index}>
        <section className='dash-team'>
          <label className='dash-team-name'>{team.name}</label>
          <ul className='dash-team-roster'>{images}</ul>
          <label htmlFor='dash-stats' className='dash-stats-label'>Stats</label>
          {dashStats}
          <p className='dash-team-notes'>{team.notes || 'No notes for this build'}</p>
          <Link to='/review'><button onClick={() => this.props.dispatch(viewUserTeam(team.team))}>View Build</button></Link> 
        </section>
      </li>
    ));


    return(
      <div className='dashboard'>
        <HeaderBar logout={()=>this.logout()} />
        <br/>
        <section className="dash-userteams">
          <label className='dash-your-build'>Your Builds</label>
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