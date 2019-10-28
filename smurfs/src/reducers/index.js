import { combineReducers } from 'redux';
import bioReducer from './bioReducer';
import smurfReducer from './smurfReducer';

export default combineReducers({
  bio: bioReducer,
  smurf: smurfReducer
});