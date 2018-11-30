import React from 'react';
import {connect} from 'react-redux';

class BarTeam extends React.Component {

  render(){

    //Returns an array of hero rosters from user-saved teams
    const teamSelector = this.props.userTeams.map(collective => {
      return collective.team;
    });
  

    //Returns an array of user-saved teams
    const collectiveTeam = this.props.userTeams.map(collective => {
      return collective;
    });


    //Returns the images of heroes within selected roster
    const teamImages = teamSelector[this.props.teamIndex].map(hero => {
      return(
        <li key={hero.heroName} className='bar-hero'>
          <img src={hero.image} alt={hero.heroName} className='bar-hero-image'></img>
        </li>
      );
    }); 
    


    return(
        <section className='bar-team'>
          <label className='bar-team-name'>{collectiveTeam[this.props.teamIndex].name}</label>
          <ul className='bar-team-roster'>{teamImages}</ul>
        </section>
    )
  }
}

function mapStateToProps(state){
  return{
    userTeams: state.user.teams
  }
}
export default connect(mapStateToProps)(BarTeam);