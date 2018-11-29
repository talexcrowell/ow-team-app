import { API_BASE_URL } from '../config';
import { RESET_USER_TEAM } from './user';


//Sync functions
export const FETCH_HEROES_REQUEST = 'FETCH_HEROES_REQUEST';
export const fetchHeroesRequest = () => ({
  type: FETCH_HEROES_REQUEST
});

export const FETCH_HEROES_SUCCESS = 'FETCH_HEROES_SUCCESS';
export const fetchHeroesSuccess = (heroes) => ({
  type: FETCH_HEROES_SUCCESS,
  heroes,
});

export const FETCH_HEROES_ERROR = 'FETCH_HEROES_ERROR';
export const fetchHeroesError = (error) => ({
  type: FETCH_HEROES_ERROR,
  error
});

export const ADD_HERO_TO_ROSTER = 'ADD_HERO_TO_ROSTER';
export const addHeroToRoster = (hero) => ({
  type:ADD_HERO_TO_ROSTER,
  hero
});

export const REMOVE_HERO_FROM_ROSTER = 'REMOVE_HERO_FROM_ROSTER';
export const removeHeroFromRoster = (hero) => ({
  type: REMOVE_HERO_FROM_ROSTER,
  hero
});

//Async functions
export const fetchHeroes = () => {
  return (dispatch, getState) => {
    dispatch(fetchHeroesRequest());
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/api/heroes`,{
      method: 'GET',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(res => res.json())
    .then(data => dispatch(fetchHeroesSuccess(data)))
    .catch(error => dispatch(fetchHeroesError(error)))
  }
}

