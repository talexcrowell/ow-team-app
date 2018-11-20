import {FETCH_USER_TEAMS_REQUEST, FETCH_USER_TEAMS_SUCCESS, FETCH_USER_TEAMS_ERROR, ADD_HERO_TO_USER_TEAM, RESET_USER_TEAM} from '../actions/user';


const initialState = {
  teams:[],
  currentTeam:[],
  loading: false,
  error: null
};

export default function userReducer(state=initialState, action){
  if(action.type === FETCH_USER_TEAMS_REQUEST){
    return{
      ...state,
      loading: true
    }
  }
  else if (action.type === FETCH_USER_TEAMS_SUCCESS){
    return{
      ...state,
      loading: false,
      error: null,
      teams: [...action.teams]
    }
  }
  else if (action.type === FETCH_USER_TEAMS_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }
  else if(action.type === ADD_HERO_TO_USER_TEAM){
    return{
      ...state,
      currentTeam: [...state.currentTeam, action.hero]
    }
  }
  else if(action.type === RESET_USER_TEAM){
    return{
      ...state,
      currentTeam:[]
    }
  }
  return state;
}