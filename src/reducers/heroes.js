import {FETCH_HEROES_REQUEST, FETCH_HEROES_SUCCESS, FETCH_HEROES_ERROR, REMOVE_HERO_FROM_ROSTER, ADD_HERO_TO_ROSTER} from '../actions/heroes';

const initialState = {
  heroes:[],
  loading: false,
  error: null
};

export default function heroesReducer(state=initialState, action){
  if (action.type === FETCH_HEROES_REQUEST){
    return{
      ...state,
      loading: true
    }
  }

  else if(action.type === FETCH_HEROES_SUCCESS){
    return{
      ...state,
      loading: false,
      error: null,
      heroes: [...action.heroes],
    }
  }

  else if(action.type === FETCH_HEROES_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }

  else if(action.type === ADD_HERO_TO_ROSTER){
    return{
      ...state,
      heroes: [...state.heroes, action.hero]
    }
  }

  else if(action.type === REMOVE_HERO_FROM_ROSTER){
    return{
      ...state,
      heroes: state.heroes.filter(hero => hero.id !== action.hero.id)
    }
  }
  return state;
}