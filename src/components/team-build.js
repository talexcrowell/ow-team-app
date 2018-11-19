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
      <ul>{heroes}</ul>
    )
  }
}

function mapStateToProps(state){
  return{
    heroes: state.heroes  
  }
}

export default connect(mapStateToProps)(TeamBuild);