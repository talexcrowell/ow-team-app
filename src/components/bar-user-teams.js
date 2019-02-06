import React from 'react';
import {connect} from 'react-redux';
import BarTeam from './bar-team';


class BarUserTeams extends React.Component {
  render(){

    //Returns a listable entry of the user saved team
    const userTeams = this.props.userTeams.map((team, index) => (
      <li key={index} className='user-build'>
        <BarTeam teamIndex={index} />
      </li>
    ));

    return(
      <section className="userteams-build">
        <label className='your-build'>Your Builds</label>
        <ul className='user-builds'>{userTeams}</ul>
      </section>)
  }
}

function mapStateToProps(state){
  return{
    userTeams: state.user.teams
  }
}
export default connect(mapStateToProps)(BarUserTeams);