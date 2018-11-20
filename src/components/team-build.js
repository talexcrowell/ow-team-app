import React from 'react';
import {connect} from 'react-redux';
import {fetchHeroes} from '../actions/heroes';

export class TeamBuild extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchHeroes());
  }

  render() {
    const heroes = this.props.heroes.map((hero, index) => (
      <li key={index}>{hero.heroName}</li>
    ));

    return(
      <div>
        <div>
          <ul>{heroes}</ul>
        </div>
        <div>
          <p>Current Team:</p>
          <ul></ul>
            <li>Damage:</li>
            <li>Damage Per Second:</li>
            <li>Health:</li>
            <li>Healing Per Second:</li>
            <li>Abilities:</li>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    heroes: state.heroes  
  }
}

export default connect(mapStateToProps)(TeamBuild);