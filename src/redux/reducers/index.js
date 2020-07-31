import { combineReducers } from 'redux';
import Movies from './moviesReducer'
import Users from './usersReducer'


const allReducers = combineReducers({
    allMovies : Movies,
    allUsers  : Users
});

export default allReducers;