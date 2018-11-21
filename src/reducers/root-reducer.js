import {combineReducers} from 'redux';
import userReducer from './user';
import heroesReducer from './heroes';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  user: userReducer,
  heroes: heroesReducer,
  auth: authenticationReducer
});

export default rootReducer;