import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import BarTeam from './bar-team';
import {resetUserTeam} from '../actions/user';


class BarUserTeams extends React.Component {
  render(){

    //Returns a listable entry of the user saved team
    const userTeams = this.props.userTeams.map((team, index) => (
      <li key={index}>
        <BarTeam teamIndex={index} />
      </li>
    ));

    return(
      <section className="userteams-build">
        <Link to='/dashboard'><button onClick={() => this.props.dispatch(resetUserTeam())}>Dashboard</button></Link>
        <label className='your-build'>Your Builds</label>
        <ul>{userTeams}</ul>
      </section>)
  }
}

function mapStateToProps(state){
  return{
    userTeams: state.user.teams
  }
}
export default connect(mapStateToProps)(BarUserTeams);