import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import heroesReducer from './reducers/heroes'

const store = createStore(heroesReducer, applyMiddleware(thunk));
export default store;