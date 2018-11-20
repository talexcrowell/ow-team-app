import React from 'react';
import {connect} from 'react-redux';
import {fetchHeroes} from '../actions/heroes';
import {fetchUserTeams, addHeroToUserTeam} from '../actions/user';

export class TeamBuild extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchHeroes());
    // this.props.dispatch(fetchUserTeams());
  }

  render() {
    const userTeams = this.props.userTeams.map((team, index) => (
      <li key={index}>{team}</li>
    ));
    
    const heroes = this.props.heroes.map((hero, index) => (
      <li key={index}>
        {hero.heroName}
        <button onClick={() => this.props.dispatch(addHeroToUserTeam(this.props.heroes[index]))}>
        +</button>
        </li>
    ));


    return(
      <div>
        <div className="hero-roster">
          <ul>{heroes}</ul>
        </div>
        <section className="current-build">
          <p>Current Team:</p>
          <ul></ul>
            <li>Damage:</li>
            <li>Damage Per Second:</li>
            <li>Health:</li>
            <li>Healing Per Second:</li>
            <li>Abilities:</li>
        </section>
        <section>
          <ul>{userTeams}</ul>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    heroes: state.heroes.heroes,
    userTeams: state.user.teams  
  }
}

export default connect(mapStateToProps)(TeamBuild);