import React from 'react';
import {connect} from 'react-redux';

class DashboardTeams extends React.Component {

  render(){
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
    <section className="dash-userteams">
      <label className='dash-your-build'>Your Builds</label>
      <ul>{userTeams}</ul>
    </section>);

  }  
}

export default connect(mapStateToProps)(DashboardTeams);