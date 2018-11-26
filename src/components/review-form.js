import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { saveUserCurrentTeam } from '../actions/user';
import requiresLogin from '../requires-login';

class ReviewForm extends React.Component {
  onSubmit(e) {
    const newTeam ={
      name: e.target.teamName.value,
      team: this.props.currentTeam
    };
    console.log(newTeam);
    return this.props.dispatch(saveUserCurrentTeam(newTeam));
  }
  
  render() {
  const currentTeam = this.props.currentTeam.map((team, index) => (
    <li key={index}>{team.heroName}</li>
  ));

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
  
  return(
    <form className="current-build" onSubmit={(e)=> {
      e.preventDefault();
      this.onSubmit(e);
    }}>
      <label htmlFor="teamName">Build Name</label>
      <input name= "teamName" placeholder='Team Name...'></input>
      <ul>{currentTeam}</ul>
      <ul>
        <li>Damage:{dmg}</li>
        <li>Damage Per Second:{dps}</li>
        <li>Health:{health}</li>
        <li>Healing Per Second:{hps}</li>
        <li>Abilities:</li>
      </ul>
      <Link to='/build' ><button>Edit Build</button></Link>
      <button>Save Build</button>
    </form>
  )
  }
}

function mapStateToProps(state){
  return{
    currentTeam: state.user.currentTeam,
  }
}

export default requiresLogin()(connect(mapStateToProps)(ReviewForm));