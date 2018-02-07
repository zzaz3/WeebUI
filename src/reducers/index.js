import { combineReducers } from 'redux';
import characters from './characterReducer';
import anilist from './anilistReducer';

// Properties names will be used when referencing the state from within React components.

const rootReducer = combineReducers({
  characters,
  anilist
});

export default rootReducer;
