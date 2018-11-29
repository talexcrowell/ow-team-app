import React from 'react';
import {connect} from 'react-redux';

class DashboardTeamStats extends React.Component {

  render(){    
    
  const teamSelector = this.props.teams.map(collective => {
    return collective.team;
  });

  const teamName = this.props.teams.map(collective => {
    return collective;
  })

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

  const images = teamSelector[this.props.teamIndex].map((hero)=>{
    return (
      <li key={hero.heroName} className='dash-hero'>
        <img src={hero.image} alt={hero.heroName} className='dash-hero-image'></img>
        <p className='dash-hero-name'>{hero.heroName}</p>
      </li>);
  });

  return(
    <section>
    <label className='dash-team-name'>{teamName[this.props.teamIndex].name}</label>
      <ul className='dash-team-roster'>{images}</ul>
    <label htmlFor='dash-stats' className='dash-stats-label'>Stats</label>
    <ul className='dash-stats'>
      <li className='dash-stat'>Damage: {dmgStats} </li>
      <li className='dash-stat'>Damage Per Second: {dpsStats}</li>
      <li className='dash-stat'>Health: {healthStats} </li>
      <li className='dash-stat'>Healing Per Second: {hpsStats}</li>
    </ul>
    </section>)
  
  }
}

function mapStateToProps(state){
  return{
    teams: state.user.teams
  }
}
export default connect(mapStateToProps)(DashboardTeamStats)