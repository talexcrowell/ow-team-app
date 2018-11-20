import { API_BASE_URL } from '../config';

//Sync
export const FETCH_USER_TEAMS_REQUEST = 'FETCH_USER_TEAMS_REQUEST';
export const fetchUserTeamsRequest = () => ({
  type: FETCH_USER_TEAMS_REQUEST
});

export const FETCH_USER_TEAMS_SUCCESS = 'FETCH_USER_TEAMS_SUCCESS';
export const fetchUserTeamsSuccess = (teams) => ({
  type: FETCH_USER_TEAMS_REQUEST,
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

// Async
export const fetchUserTeams = () => {
  return (dispatch) => {
    dispatch(fetchUserTeamsRequest());
    fetch(`${API_BASE_URL}/api/teamlist`)
  }
}