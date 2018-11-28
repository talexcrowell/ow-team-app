import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {viewUserTeam} from '../actions/user';
import DashboardTeamStats from './dashboard-team-stats'

class DashboardTeams extends React.Component {

  render(){

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



    const images = this.props.teams.reduce((images, team) => {
      return [...team.team.map(hero =>  <li key={hero.heroName} className='dash-hero'>
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
          <DashboardTeamStats teamIndex={index} />
          <p className='dash-team-notes'>{team.notes || 'No notes for this build'}</p>
          <Link to='/review'><button onClick={() => this.props.dispatch(viewUserTeam(team.team))}>View Build</button></Link> 
        </section>
      </li>
    ));


    return(
    <section className="dash-userteams">
      <label className='dash-your-build'>Your Builds</label>
      <ul>{userTeams}</ul>
    </section>);
  }
}
  
  function mapStateToProps(state){
    return{
      teams: state.user.teams
    }
  }

export default connect(mapStateToProps)(DashboardTeams);