import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './landing-page.css'

function LandingPage (props){
  if(props.loggedIn){
    return <Redirect to='/dashboard' />
  }
  
  return(
    <div className='landing-page'>
      <h2>Overwatch Buddy</h2>
      <section className='navlinks'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/register'><button>Register</button></Link>
        <Link to='/info'><button>More Info</button></Link>
      </section>
    </div>
  )
}

function mapStateToProps(state){
  return{
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(LandingPage);