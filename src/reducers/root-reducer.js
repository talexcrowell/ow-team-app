import {combineReducers} from 'redux';
import userReducer from './user';
import heroesReducer from './heroes';

const rootReducer = combineReducers({
  user: userReducer,
  heroes: heroesReducer
});

export default rootReducer;