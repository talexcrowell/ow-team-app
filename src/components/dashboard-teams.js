import React from 'react';
import {connect} from 'react-redux';
import DashboardTeamStats from './dashboard-team-stats'

export class DashboardTeams extends React.Component {

  render(){
    
    //Creates a listable entry of specific user-saved team
    const userTeams = this.props.teams.map((team, index) => (
      <li key={index}>
        <section className='dash-team'>
          <DashboardTeamStats teamIndex={index} />
        </section>
      </li>
    ));


    return(
    <section className="dash-userteams">
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