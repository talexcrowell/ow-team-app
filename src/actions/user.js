import { API_BASE_URL } from '../config';
import { login } from './authentication';

//Sync
export const FETCH_USER_TEAMS_REQUEST = 'FETCH_USER_TEAMS_REQUEST';
export const fetchUserTeamsRequest = () => ({
  type: FETCH_USER_TEAMS_REQUEST
});

export const FETCH_USER_TEAMS_SUCCESS = 'FETCH_USER_TEAMS_SUCCESS';
export const fetchUserTeamsSuccess = (teams) => ({
  type: FETCH_USER_TEAMS_SUCCESS,
  teams
});

export const FETCH_USER_TEAMS_ERROR = 'FETCH_USER_TEAMS_ERROR';
export const fetchUserTeamsError = (error) => ({
  type: FETCH_USER_TEAMS_ERROR,
  error
});

export const ADD_HERO_TO_USER_TEAM = 'ADD_HERO_TO_USER_TEAM';
export const addHeroToUserTeam = (hero) => ({
  type: ADD_HERO_TO_USER_TEAM,
  hero
})

export const REMOVE_HERO_FROM_USER_TEAM = 'REMOVE_HERO_FROM_USER_TEAM';
export const removeHeroFromUserTeam = (hero) => ({
  type: REMOVE_HERO_FROM_USER_TEAM,
  hero
})

export const RESET_USER_TEAM = 'RESET_USER_TEAM';
export const resetUserTeam = (hero) => ({
  type: RESET_USER_TEAM
})

export const VIEW_USER_TEAM = 'VIEW_USER_TEAM';
export const viewUserTeam = (team) => ({
  type: VIEW_USER_TEAM,
  team
})

export const SAVE_USER_TEAM_SUCCESS = 'SAVE_USER_TEAM_SUCCESS';
export const saveUserTeamSuccess = () => ({
  type: SAVE_USER_TEAM_SUCCESS,
})

export const SAVE_USER_TEAM_ERROR = 'SAVE_USER_TEAM_ERROR';
export const saveUserTeamError = error => ({
  type: SAVE_USER_TEAM_ERROR,
  error
})

export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const registerUserError = error => ({
  type:REGISTER_USER_ERROR,
  error
});


// Async
export const fetchUserTeams = () => {
  return (dispatch, getState) => {
    dispatch(fetchUserTeamsRequest());
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/api/teams`, {
      method: 'GET',
      headers:{
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(err => Promise.reject(err));
      }
      return res.json();
    })
    .then(data => dispatch(fetchUserTeamsSuccess(data)))
    .catch(err => dispatch(fetchUserTeamsError(err)))
  }
}

export const saveUserCurrentTeam = (currentTeam) => {
  return (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/api/teams`, {
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({currentTeam})
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(err => Promise.reject(err));
      }
      return res.json();
    })
    .then(() => dispatch(fetchUserTeams()))
    .catch(err => dispatch(saveUserTeamError(err)))
  }
}


export const deleteUserSavedTeam= (team) =>{
  return(dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/api/teams/${team.id}`, {
      method: 'DELETE',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }, 
    })
    .then(res => res.json())
    .then(() => dispatch(fetchUserTeams()))
    .catch(err => dispatch(fetchUserTeams(err)))
  } 

}

export const registerUser = user => {
  return dispatch => {
    fetch(`${API_BASE_URL}/api/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(err => Promise.reject(err));
      }
      return res.json();
    })
    .then(()=> dispatch(login(user.username, user.password)))
    .catch(err => dispatch(registerUserError(err)));
  };
};