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

export const RESET_USER_TEAM = 'RESET_USER_TEAM';
export const resetUserTeam = (hero) => ({
  type: RESET_USER_TEAM
})

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
    .then(res => res.json())
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
    .then(res => res.json())
    .then(() => dispatch(fetchUserTeams()))
    .catch(err => dispatch(fetchUserTeams(err)))
  }
}

export const registerUser = user => {
  console.log(user);
  return dispatch => {
    fetch(`${API_BASE_URL}/api/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(()=> dispatch(login(user.username, user.password)))
      .catch(err => {
        console.log(err)
      });
  };
};