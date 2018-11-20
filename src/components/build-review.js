import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function BuildReview (props) {
  const currentTeam = props.currentTeam.map((team, index) => (
    <li key={index}>{team.heroName}</li>
  ));
  
  return(
    <div>
      <Link to='/dashboard'>Back To Home</Link>
      <section className="current-build">
        <h3>Current Team</h3>
        <ul>{currentTeam}</ul>
        <ul>
          <li>Damage:</li>
          <li>Damage Per Second:</li>
          <li>Health:</li>
          <li>Healing Per Second:</li>
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