import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { deleteUserSavedTeam } from '../actions/user';
import requiresLogin from '../requires-login';
import'./view-form.css';

class ViewForm extends React.Component {
  render() {
  const currentTeam = this.props.currentTeam.map((hero, index) => (
    <li className='hero-review' key={index}>
    <div class="review-flip-card">
      <div class="review-flip-card-inner">
        <div class="review-flip-card-front">
          <img className='hero-image-review' src={hero.image} alt={hero.heroName}></img>
          <p className='hero-name-review'>{hero.heroName}</p>
          <p className='hero-role-review'>{hero.role}</p>
        </div>
        <div class="review-flip-card-back">
          <label className='review-flip-label'>Damage</label>
          <p className='hero-role-review'>{hero.damage}</p>
          <label className='review-flip-label'>DPS</label>
          <p className='hero-role-review'>{hero.dps}</p>
          <label className='review-flip-label'>Health</label>
          <p className='hero-role-review'>{hero.health}</p>
          <label className='review-flip-label'>HPS</label>
          <p className='hero-role-review'>{hero.hps}</p>
        </div>
      </div>
    </div>
  </li>
  ));

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

    const abilities = this.props.currentTeam.reduce((abilities, hero) => {
      return [...abilities, ...hero.abilities.map((ability, index) => <li key={hero.heroName + index} className='review-ability'>{ability}</li>)];
    }, []);

    const ultimates = this.props.currentTeam.map((hero, index) => (
      <li key={index} className='review-ult'>{hero.ultimate.ultName}</li>
    ));    
    

  
  return(
    <form className="review-build">
      <section className="review-build">
      <h4 aria-level='1' className="view-buildName-label">{this.props.teamCollective.name}</h4>
        <section className='review-team-roster'>
          <ul className='review-team'>{currentTeam}</ul>
        </section> 
        <section className='other-lists'>
          <ul className='review-stats'>
            <li className='review-stat'>Damage: {dmgSum} </li>
            <li className='review-stat'>Damage Per Second: {dpsSum}</li>
            <li className='review-stat'>Health: {healthSum}</li>
            <li className='review-stat'>Healing Per Second: {hpsSum}</li>
          </ul>
          <section className='review-team-notes'>
            <label htmlFor='userNotes' className='review-notes-label'>Notes</label>
            <p className='review-userNotes'>{this.props.teamCollective.notes}</p>
          </section>
          <section className='review-abilities'>
            <h4 aria-level='2'>Abilities</h4>
            <ul className='review-abilities-list'>{abilities}</ul>
          </section>
          <section className='review-ultimates'>
            <h4 aria-level='3'>Ultimates</h4>
            <ul className='review-ult-list'>{ultimates}</ul>
          </section>
        </section> 
      </section>
      <Link to='/dashboard'><button className='delete-button' onClick={()=> this.props.dispatch(deleteUserSavedTeam(this.props.teamCollective))}>Delete Build</button></Link>
    </form>
  )
  }
}

function mapStateToProps(state){
  return{
    currentTeam: state.user.currentTeam,
    teamCollective: state.user.teamCollective
  }
}

export default requiresLogin()(connect(mapStateToProps)(ViewForm));