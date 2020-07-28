import { combineReducers } from 'redux';
import Movies from './moviesReducer'


const allReducers = combineReducers({
    allMovies : Movies
});

export default allReducers;