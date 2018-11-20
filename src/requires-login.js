import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export default () => Component => {
  function RequiresLogin(props){
    const{ authenticating, loggedIn, error, ...remainingProps} = props;
    if (authenticating) {
      return <div>Please Wait...</div>;
    } else if (!loggedIn || error) {
      return <Redirect to='/' />;
    }
    return <Component {...remainingProps} />;
  }
  
  const mapStateToProps = (state, props) => ({
    authenticating: state.auth.loading,
    loggedIn: state.auth.currentUser !== null,
    error: state.auth.error
  });

  return connect(mapStateToProps)(RequiresLogin);
}; 
