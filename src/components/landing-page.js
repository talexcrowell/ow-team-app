import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './landing-page.css'

function LandingPage (props){
  if(props.loggedIn){
    return <Redirect to='/dashboard' />
  }
  
  return(
    <main role='main' className='landing-page'>
      <h2 aria-level='1'>Overwatch Buddy</h2>
      <p className='description'>
      Playing some competitive matches and want to prep a build with your group? 
      Trying to learn and understand the importance of builds in a game? 
      See a build in the pro scene and want to customize it to be your own?
      </p>
      <p className='description'>
      With the rise of popularity in Esports and live streaming, 
      people have been more open about spending their time playing games with friends 
      whether it is pushing to reach that next ranked tier or to mess around and enjoy themselves.
      </p>
      <p className='description'>
      For those looking to learn more about the potential within the mecahnics of Blizzard's competitive shooter, 
      Overwatch, Overwatch Buddy is for you. Learn to improve your team building skills, 
      gain further insight into your team's build even when new heroes are introduced, 
      and improve overall as a player. The more information you can learn, 
      the better you and your team will become. With more features on the way 
      (stat tracking, record tracking,  Esports news etc.), 
      Overwatch Buddy is and will become a more incredible tool to propel you into the pro leagues!
      </p>
      <section className='navlinks'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/register'><button>Register</button></Link>
      </section>
    </main>
  )
}

function mapStateToProps(state){
  return{
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(LandingPage);