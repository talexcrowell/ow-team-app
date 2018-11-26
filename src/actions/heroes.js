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

