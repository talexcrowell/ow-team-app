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
  const currentTeam = this.props.currentTeam.map((hero, index) => (
    <li className='hero-review' key={index}>
    <img className='hero-image-review' src={hero.image} alt={hero.heroName}></img>
    <p className='hero-name-review'>{hero.heroName}</p>
    <p className='hero-role-review'>{hero.role}</p>
  </li>
  ));

  let dmg = <div>0</div>;
    let dmgSum = 0;
    if(this.props.currentTeam.length >0){
      for(let i = 0; i < this.props.currentTeam.length; i++){
        dmgSum += this.props.currentTeam[i].damage;
      }
    }

    let dps = <div>0</div>;
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

    const ultimates = this.props.currentTeam.map((hero, index) => (
      <li key={index} className='review-ult'>{hero.ultimate.ultName}</li>
    ));
  
  return(
    <form className="review-build" onSubmit={(e)=> {
      e.preventDefault();
      this.onSubmit(e);
    }}>
      <section className="review-build">
        <label htmlFor="buildName" className="buildName-label">Name Your Build:</label>
        <input name= "buildName" className="buildName" placeholder='ex. Dive Comp...'></input>
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
          <section className='team-notes'>
            <label htmlFor='user-notes' className='notes-label'>Notes</label>
            <textarea name='user-notes' className='user-notes'></textarea>
          </section>
          <section className='review-abilities'>
            <h4>Abilities</h4>
            <ul className='review-abilities-list'><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li><li className="review-ability">Gripping Hook</li></ul>
          </section>
          <section className='review-ultimates'>
            <h4>Ultimates</h4>
            <ul className='review-ult-list'>{ultimates}</ul>
          </section>
        </section> 
      </section>
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