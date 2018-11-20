import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';

export class Dashboard extends React.Component {
  
  render() {
    return(
      <div classname='dashboard'>
        <div>
          Hello Login
        </div>    
      </div>  
    )
  }
}

export default requiresLogin()(connect()(Dashboard));