import React from 'react';
import {connect} from 'react-redux';

function InfoPage (props){
  return(
    <div>
      <h2>Overwatch Buddy</h2>
      <div>
        <p>
        Playing some competitive matches and want to prep a build with your group? 
        Trying to learn and understand the importance of builds in a game? 
        See a build in the pro scene and want to customize it to be your own?
        </p>
        <p>
        With the rise of popularity in Esports and live streaming, 
        people have been more open about spending their time playing games with friends 
        whether it is pushing to reach that next ranked tier or to mess around and enjoy themselves.
        </p>
        <p>
        For those looking to learn more about the potential within the competitive shooter, 
        Overwatch's mechanics, Overwatch Buddy is for you. Learn to improve your team building skills, 
        gain further insight into your team's build even when new heroes are introduced, 
        and improve overall as a player. The more information you can learn, 
        the better you and your team will become. With more features on the way 
        (stat tracking, record tracking,  Esports news etc.), 
        Overwatch Buddy is and will become a more incredible tool to propel you into the pro leagues!
        </p>
        <a href='#'>Register</a>
      </div>
    </div>
  )
}

export default connect()(InfoPage);