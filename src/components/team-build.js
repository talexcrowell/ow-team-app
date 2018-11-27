import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchHeroes} from '../actions/heroes';
import {fetchUserTeams, addHeroToUserTeam, resetUserTeam} from '../actions/user';
import requiresLogin from '../requires-login';
import './team-build.css'

export class TeamBuild extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchHeroes());
    this.props.dispatch(fetchUserTeams());
  }

  render() {
    let buildError;
    if(this.props.currentTeam.length > 6){
      this.props.currentTeam.length = 6;
      buildError = <div>You have reached the maximimum number of heroes!</div>
    }

    let dmgSum = 0;
    if(this.props.currentTeam.length >0){
      for(let i = 0; i < this.props.currentTeam.length; i++){
        dmgSum += this.props.currentTeam[i].damage;
      }
    }

    let dpsSum = 0;
    if(this.props.currentTeam.length >0){
      for(let i = 0; i < this.props.currentTeam.length; i++){
        dpsSum += this.props.currentTeam[i].dps;
      }
    }

    let healthSum = 0;
    if(this.props.currentTeam.length >0){
      for(let i = 0; i < this.props.currentTeam.length; i++){
        healthSum += this.props.currentTeam[i].health;
      }
    }

    let hpsSum = 0;
    if(this.props.currentTeam.length >0){
      for(let i = 0; i < this.props.currentTeam.length; i++){
        hpsSum += this.props.currentTeam[i].hps;
      }
    }


    // if(this.props.currentTeam.length >= 2){
    //   for(let i=0; i < this.props.currentTeam.length; i++){
    //     for(let j=1; j < this.props.currentTeam.length; j++){
    //       if(this.props.currentTeam[i].heroName === this.props.currentTeam[j].heroName){
    //         buildError = <div>You have a duplicate hero in your build!</div>
    //       }
    //     }
    //   }
    // }


    const currentTeam = this.props.currentTeam.map((hero, index) => (
      <li className='hero-current' key={index}>
        <img className='hero-image-current' src={hero.image} alt={hero.heroName}></img>
        <p>{hero.heroName}</p>
        <p>Role: {hero.role}</p>
      </li>
    ));
    
    const heroes = this.props.heroes.map((hero, index) => (
      <li className='hero' key={index}>
        <img className='heroimage' src={hero.image} alt={hero.heroName}></img>
        <p>{hero.heroName}</p>
        <p>Role: {hero.role}</p>
        <button onClick={() => this.props.dispatch(addHeroToUserTeam(this.props.heroes[index]))}>+</button>
        </li>
    ));

    const userTeams = this.props.userTeams.map((team, index) => (
      <li key={index}>{team.name}</li>
    ));

    return(
      <div className="team-build">
        <section className="userteams-build">
          <Link to='/dashboard'><button>Dashboard</button></Link>
          <label className='your-build'>Your Builds</label>
          <ul>{userTeams}</ul>
        </section>
        <section className="hero-roster">
          <h3 className='roster-label'>Hero Roster</h3>
          <ul>{heroes}</ul>
        </section>
        <section className="current-build">
          <h3 className='current-label'>Current Team</h3>
          {buildError}
          <ul className='current-team'>{currentTeam}</ul>
          <ul className='stats'>
            <li>Damage: {dmgSum} </li>
            <li>Damage Per Second: {dpsSum}</li>
            <li>Health: {healthSum}</li>
            <li>Healing Per Second: {hpsSum}</li>
          </ul>
          <ul className='abilties'></ul>
          <ul className='ultimates'></ul>
          <button onClick={() => this.props.dispatch(resetUserTeam())}>Reset</button>
          <Link to='/review' ><button>Review Build</button></Link>
        </section>
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
    heroes: state.heroes.heroes,
    currentTeam: state.user.currentTeam,
    userTeams: state.user.teams
  }
}

export default requiresLogin()(connect(mapStateToProps)(TeamBuild));