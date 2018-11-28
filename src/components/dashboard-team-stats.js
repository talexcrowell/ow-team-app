import React from 'react';
import {connect} from 'react-redux';

class DashboardTeamStats extends React.Component {

  render(){    
    
  const teamSelector = this.props.teams.map(collective => {
    return collective.team;
  });

  console.log(teamSelector);
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

  return(
    <ul className='dash-stats'>
      <li className='dash-stat'>Damage: {dmgStats} </li>
      <li className='dash-stat'>Damage Per Second: {dpsStats}</li>
      <li className='dash-stat'>Health: {healthStats} </li>
      <li className='dash-stat'>Healing Per Second: {hpsStats}</li>
    </ul>)
  
  }
}

function mapStateToProps(state){
  return{
    teams: state.user.teams
  }
}
export default connect(mapStateToProps)(DashboardTeamStats)