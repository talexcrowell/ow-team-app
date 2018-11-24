import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function BuildReview (props) {
  const currentTeam = props.currentTeam.map((team, index) => (
    <li key={index}>{team.heroName}</li>
  ));

  let dmg = <div>0</div>;
    let dmgSum = 0;
    if(props.currentTeam.length >0){
      for(let i = 0; i < props.currentTeam.length; i++){
        dmgSum += props.currentTeam[i].damage;
      }
      dmg = <div>{dmgSum}</div>;
    }

    let dps = <div>0</div>;
    let dpsSum = 0;
    if(props.currentTeam.length >0){
      for(let i = 0; i < props.currentTeam.length; i++){
        dpsSum += props.currentTeam[i].dps;
      }
      dps = <div>{dpsSum}</div>;
    }

    let health = <div>0</div>;
    let healthSum = 0;
    if(props.currentTeam.length >0){
      for(let i = 0; i < props.currentTeam.length; i++){
        healthSum += props.currentTeam[i].health;
      }
      health= <div>{healthSum}</div>;
    }

    let hps = <div>0</div>;
    let hpsSum = 0;
    if(props.currentTeam.length >0){
      for(let i = 0; i < props.currentTeam.length; i++){
        hpsSum += props.currentTeam[i].hps;
      }
      hps = <div>{hpsSum}</div>;
    }
  
  return(
    <div>
      <Link to='/dashboard'>Back To Home</Link>
      <section className="current-build">
        <h3>Current Team</h3>
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
      </section>
    </div>
    
  )
}

function mapStateToProps(state){
  return{
    currentTeam: state.user.currentTeam
  }
}

export default connect(mapStateToProps)(BuildReview);