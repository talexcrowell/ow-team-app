import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchHeroes, addHeroToRoster} from '../actions/heroes';
import {fetchUserTeams, addHeroToUserTeam, removeHeroFromUserTeam, resetUserTeam} from '../actions/user';
import {removeHeroFromRoster} from'../actions/heroes';
import requiresLogin from '../requires-login';
import './team-build.css'

export class TeamBuild extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchHeroes());
    this.props.dispatch(fetchUserTeams());
  }

  fullReset(){
    this.props.dispatch(fetchHeroes());
    this.props.dispatch(resetUserTeam());
  }

  render() {
    let buildError;
    if(this.props.currentTeam.length > 6){
      this.props.currentTeam.length = 6;
      buildError = <div className='build-error'>You have reached the maximimum number of heroes!</div>
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

    const currentTeam = this.props.currentTeam.map((hero, index) => (
      <li className='hero-current' key={index}>
        <img className='hero-image-current' src={hero.image} alt={hero.heroName}></img>
        <p className='hero-name'>{hero.heroName}</p>
        <p className='hero-role'>{hero.role}</p>
        <button onClick={() => {
          this.props.dispatch(removeHeroFromUserTeam(hero));
          this.props.dispatch(addHeroToRoster(hero));
          } 
        }>-</button>
      </li>
    ));

    let double = [];
    for(let i=0; i < this.props.currentTeam.length; i++){
      double.push(this.props.currentTeam[i].id);
    }
    
    const heroList = this.props.heroes.filter(hero => !double.includes(hero.id));

    const heroes = heroList.map((hero, index) => (
      <li className='hero' key={index}>
        <img className='heroimage' src={hero.image} alt={hero.heroName}></img>
        <p className='hero-name'>{hero.heroName}</p>
        <p className='hero-role'>{hero.role}</p>
        <button onClick={() => {
          this.props.dispatch(addHeroToUserTeam(this.props.heroes[index]));
          if(this.props.currentTeam.length < 6){
            this.props.dispatch(removeHeroFromRoster(this.props.heroes[index]));
          }
        }}>+</button>
        </li>
    ));
    

    const teamImages = this.props.userTeams.reduce((images, team) => {
      return [...team.team.map(hero => <li key={hero.heroName} className='bar-hero'>
                                        <img src={hero.image} alt={hero.heroName} className='bar-hero-image'></img>
                                      </li>)];
    }, []);

    const userTeams = this.props.userTeams.map((team, index) => (
      <li key={index}>
        <section className='bar-team'>
          <label className='bar-team-name'>{team.name}</label>
          <ul className='bar-team-roster'>{teamImages}</ul>
        </section>
      </li>
    ));

    const ultimates = this.props.currentTeam.map((hero, index) => (
      <li key={index}>{hero.ultimate.ultName}</li>
    ));

    const abilities = this.props.currentTeam.reduce((abilities, hero) => {
      return [...abilities, ...hero.abilities.map((ability, index) => <li key={hero.heroName + index} className='ability'>{ability}</li>)];
    }, []);

    let reviewButton;
    if(this.props.teamId){
      reviewButton = <Link to='/edit' ><button>Review Build</button></Link>;
    } else {
      reviewButton = <Link to='/review' ><button>Review Build</button></Link>;
    }

    
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
          <section className='current-team-roster'>
            <ul className='current-team'>{currentTeam}</ul>
          </section>
          <section className='lists-buttons'>
            <section className='ultimates'>
              <h4>Ultimates</h4>
              <ul className='ult-list'>{ultimates}</ul>
            </section>
            <section className='abilities'>
              <h4>Abilities</h4>
              <ul className='abilities-list'>{abilities}</ul>
            </section>
            <section>
              <button onClick={() => this.fullReset()}>Reset</button>
              {reviewButton}
            </section>
          </section>  
          <ul className='stats'>
            <li className='stat'>Damage: {dmgSum} </li>
            <li className='stat'>Damage Per Second: {dpsSum}</li>
            <li className='stat'>Health: {healthSum}</li>
            <li className='stat'>Healing Per Second: {hpsSum}</li>
          </ul>
        </section>
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
    heroes: state.heroes.heroes,
    currentTeam: state.user.currentTeam,
    userTeams: state.user.teams,
    teamId: state.user.teamId !== null
  }
}

export default requiresLogin()(connect(mapStateToProps)(TeamBuild));