import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchHeroes} from '../actions/heroes';
import {fetchUserTeams, addHeroToUserTeam, resetUserTeam} from '../actions/user';

export class TeamBuild extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchHeroes());
    // this.props.dispatch(fetchUserTeams());
  }

  render() {
    let buildError;
    if(this.props.currentTeam.length > 6){
      this.props.currentTeam.length = 6;
      buildError = <div>You have reached the maximimum number of heroes!</div>
    }

    let dmg = <div>0</div>;
    let dmgSum = 0;
    if(this.props.currentTeam.length >0){
      for(let i = 0; i < this.props.currentTeam.length; i++){
        dmgSum += this.props.currentTeam[i].damage;
      }
      dmg = <div>{dmgSum}</div>;
    }

    let dps = <div>0</div>;
    let dpsSum = 0;
    if(this.props.currentTeam.length >0){
      for(let i = 0; i < this.props.currentTeam.length; i++){
        dpsSum += this.props.currentTeam[i].dps;
      }
      dps = <div>{dpsSum}</div>;
    }

    let health = <div>0</div>;
    let healthSum = 0;
    if(this.props.currentTeam.length >0){
      for(let i = 0; i < this.props.currentTeam.length; i++){
        healthSum += this.props.currentTeam[i].health;
      }
      health= <div>{healthSum}</div>;
    }

    let hps = <div>0</div>;
    let hpsSum = 0;
    if(this.props.currentTeam.length >0){
      for(let i = 0; i < this.props.currentTeam.length; i++){
        hpsSum += this.props.currentTeam[i].hps;
      }
      hps = <div>{hpsSum}</div>;
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


    const currentTeam = this.props.currentTeam.map((team, index) => (
      <li key={index}>{team.heroName}</li>
    ));
    
    const heroes = this.props.heroes.map((hero, index) => (
      <li key={index}>
        {hero.heroName}
        <button onClick={() => this.props.dispatch(addHeroToUserTeam(this.props.heroes[index]))}>+</button>
        </li>
    ));

    return(
      <div>
        <Link to='/dashboard'>Back To Home</Link>
        <div className="hero-roster">
          <h3>Hero Roster</h3>
          <ul>{heroes}</ul>
        </div>
        <section className="current-build">
          <h3>Current Team</h3>
          {buildError}
          <ul>{currentTeam}</ul>
          <ul>
            <li>Damage: {dmg} </li>
            <li>Damage Per Second: {dps}</li>
            <li>Health: {health}</li>
            <li>Healing Per Second: :{hps}</li>
            <li>Abilities:</li>
          </ul>
          <button onClick={() => this.props.dispatch(resetUserTeam())}>Reset</button>
          <Link to='/review' ><button>Review Build</button></Link>
        </section>
        <section>
          <h3>Your Other Builds</h3>
          <ul></ul>
        </section>
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
    heroes: state.heroes.heroes,
    currentTeam: state.user.currentTeam
  }
}

export default connect(mapStateToProps)(TeamBuild);