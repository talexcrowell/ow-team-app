import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchHeroes, addHeroToRoster} from '../actions/heroes';
import {fetchUserTeams, addHeroToUserTeam, removeHeroFromUserTeam, resetUserTeam} from '../actions/user';
import {removeHeroFromRoster} from'../actions/heroes';
import requiresLogin from '../requires-login';
import BarUserTeams from './bar-user-teams';
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
        <p className='hero-name-current'>{hero.heroName}</p>
        <p className='hero-role-current'>{hero.role}</p>
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
        <div class="current-flip-card">
          <div class="current-flip-card-inner">
            <div class="current-flip-card-front">
              <img className='heroimage' src={hero.image} alt={hero.heroName}></img>
              <p className='hero-name'>{hero.heroName}</p>
              <p className='hero-role'>{hero.role}</p>
            </div>
            <div class="current-flip-card-back">
              <label className='current-flip-label'>Damage</label>
              <p className='hero-role'>{hero.damage}</p>
              <label className='current-flip-label'>DPS</label>
              <p className='hero-role'>{hero.dps}</p>
              <label className='current-flip-label'>Health</label>
              <p className='hero-role'>{hero.health}</p>
              <label className='current-flip-label'>HPS</label>
              <p className='hero-role'>{hero.hps}</p>
              <label className='current-flip-label'>Ultimate</label>
              <p className='hero-role'>{hero.ultimate.ultName}</p>
              <p className='hero-ult-desc'>{hero.ultimate.desc}</p>
            </div>
          </div>
        </div>
        <button className='add-hero' onClick={() => {
          this.props.dispatch(addHeroToUserTeam(this.props.heroes[index]));
          if(this.props.currentTeam.length < 6){
            this.props.dispatch(removeHeroFromRoster(this.props.heroes[index]));
          }
        }}>+</button>
      </li>
    ));
    

    const ultimates = this.props.currentTeam.map((hero, index) => (
      <li key={index}>{hero.ultimate.ultName}</li>
    ));

    const abilities = this.props.currentTeam.reduce((abilities, hero) => {
      return [...abilities, ...hero.abilities.map((ability, index) => <li key={hero.heroName + index} className='ability'>{ability}</li>)];
    }, []);

    
    return(
      <main role='main' className="team-build">
        <BarUserTeams />
        <h3 aria-level='1' className='roster-label'>Hero Roster</h3>
        <section className="hero-roster">
          <ul>{heroes}</ul>
        </section>
        <section className="current-build">
          <h3 aria-level='2' className='current-label'>Current Team</h3>
          {buildError}
          <section className='current-team-roster'>
            <ul className='current-team'>{currentTeam}</ul>
          </section>
          <section className='lists-buttons'>
            <section className='ultimates'>
              <h4 aria-level='3'>Ultimates</h4>
              <ul className='ult-list'>{ultimates}</ul>
            </section>
            <section className='abilities'>
              <h4 aria-level='3' >Abilities</h4>
              <ul className='abilities-list'>{abilities}</ul>
            </section>
            <section className='build-buttons'>
              <Link to='/review' ><button className='review-build-button'>Review</button></Link>
              <button onClick={() => this.fullReset()}>Reset</button>
            </section>
          </section>  
          <ul className='stats'>
            <li className='stat'>Damage: {dmgSum} </li>
            <li className='stat'>Damage Per Second: {dpsSum}</li>
            <li className='stat'>Health: {healthSum}</li>
            <li className='stat'>Healing Per Second: {hpsSum}</li>
          </ul>
        </section>
      </main>
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