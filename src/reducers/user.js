import {FETCH_USER_TEAMS_REQUEST, FETCH_USER_TEAMS_SUCCESS, FETCH_USER_TEAMS_ERROR, ADD_HERO_TO_USER_TEAM, RESET_USER_TEAM, VIEW_USER_TEAM, REMOVE_HERO_FROM_USER_TEAM} from '../actions/user';


const initialState = {
  teams:[],
  currentTeam:[],
  teamId: null,
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
  else if(action.type === REMOVE_HERO_FROM_USER_TEAM){
    return{
      ...state,
      currentTeam: state.currentTeam.filter(hero => hero.id !== action.hero.id)
    }
  }
  else if(action.type === VIEW_USER_TEAM){
    return{
      ...state,
      currentTeam:[...action.team.team],
      teamId: action.team.id
    }
  }
  else if(action.type === RESET_USER_TEAM){
    return{
      ...state,
      currentTeam:[],
      teamId:null
    }
  }
  return state;
}