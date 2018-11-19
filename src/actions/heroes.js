import { API_BASE_URL } from '../config';

//Sync functions
export const FETCH_HEROES_REQUEST = 'FETCH_HEROES_REQUEST';
export const fetchHeroesRequest = () => ({
  type: FETCH_HEROES_REQUEST
});

export const FETCH_HEROES_SUCCESS = 'FETCH_HEROES_SUCCESS';
export const fetchHeroesSuccess = (heroes) => ({
  type: FETCH_HEROES_SUCCESS,
  heroes
});

export const FETCH_HEROES_ERROR = 'FETCH_HEROES_ERROR';
export const fetchHeroesError = (error) => ({
  type: FETCH_HEROES_ERROR,
  error
});

//Async functions
export const fetchHeroes = () => {
  return (dispatch) => {
    dispatch(fetchHeroesRequest());
    fetch(`${API_BASE_URL}/api/teamlist`)
    .then(res => res.json())
    .then(data => dispatch(fetchHeroesSuccess(data)))
    .catch(error => dispatch(fetchHeroesError(error)))
  }
}

