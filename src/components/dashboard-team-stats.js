import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {viewUserTeam} from '../actions/user';

export class DashboardTeamStats extends React.Component {

  render(){    
  
  //Returns an array of hero rosters from user-saved teams  
  const teamSelector = this.props.teams.map(collective => {
    return collective.team;
  });

  //Returns an array of user-saved teams
  const teamName = this.props.teams.map(collective => {
    return collective;
  })

  //Calculates the stats for specific roster
  let dmgStats=0;
  for(let i=0; i < teamSelector[this.props.teamIndex].length; i++){
    dmgStats += teamSelector[this.props.teamIndex][i].dps; 
    
  }

  let dpsStats=0;
  for(let i=0; i < teamSelector[this.props.teamIndex].length; i++){
    dpsStats += teamSelector[this.props.teamIndex][i].dps;
  }

  let healthStats=0;
  for(let i=0; i < teamSelector[this.props.teamIndex].length; i++){
    healthStats += teamSelector[this.props.teamIndex][i].health;
  }

  let hpsStats=0;
  for(let i=0; i < teamSelector[this.props.teamIndex].length; i++){
    hpsStats += teamSelector[this.props.teamIndex][i].hps;
  }

  //Returns the images/data of heroes within a specific roster
  const images = teamSelector[this.props.teamIndex].map((hero)=>{
    return (
      <li key={hero.heroName} className='dash-hero'>
        <img src={hero.image} alt={hero.heroName+this.props.teamIndex.name} className='dash-hero-image'></img>
        <label htmlFor='dash-hero-name' className='dash-hero-name-label'>Name</label>
        <p className='dash-hero-name'>{hero.heroName}</p>
        <label htmlFor='dash-hero-role' className='dash-hero-role-label'>Role</label>
        <p className='dash-hero-role'>{hero.role}</p>
        <label htmlFor='dash-hero-ult' className='dash-hero-ult-label'>Ultimate</label>
        <p className='dash-hero-ult'>{hero.ultimate.ultName}</p>
      </li>);
  });

  return(
    <section>
      <label className='dash-team-name'>{teamName[this.props.teamIndex].name}</label>
        <ul className='dash-team-roster'>{images}</ul>
      <section className='dash-team-details'>
        <label htmlFor='dash-stats' className='dash-stats-label'>Stats</label>
        <ul className='dash-stats'>
          <li className='dash-stat'>Damage: {dmgStats} </li>
          <li className='dash-stat'>Damage Per Second: {dpsStats}</li>
          <li className='dash-stat'>Health: {healthStats} </li>
          <li className='dash-stat'>Healing Per Second: {hpsStats}</li>
        </ul>
        <p className='dash-team-notes'>{teamName[this.props.teamIndex].notes || 'No notes for this build'}</p>
        <Link to='/view'><button onClick={() => this.props.dispatch(viewUserTeam(teamName[this.props.teamIndex]))}>View Build</button></Link> 
      </section>
    </section>)
  
  }
}

function mapStateToProps(state){
  return{
    teams: state.user.teams
  }
}
export default connect(mapStateToProps)(DashboardTeamStats)