import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {viewUserTeam} from '../actions/user';
import DashboardTeamStats from './dashboard-team-stats'

export class DashboardTeams extends React.Component {

  render(){
    
    //Creates a listable entry of specific user-saved team
    const userTeams = this.props.teams.map((team, index) => (
      <li key={index}>
        <section className='dash-team'>
          <DashboardTeamStats teamIndex={index} />
          <p className='dash-team-notes'>{team.notes || 'No notes for this build'}</p>
          <Link to='/view'><button onClick={() => this.props.dispatch(viewUserTeam(team))}>View Build</button></Link> 
        </section>
      </li>
    ));


    return(
    <section className="dash-userteams col-12">
      <label className='dash-your-build'>Your Builds</label>
      <ul>{userTeams}</ul>
    </section>);
  }
}
  
  function mapStateToProps(state){
    return{
      teams: state.user.teams
    }
  }

export default connect(mapStateToProps)(DashboardTeams);