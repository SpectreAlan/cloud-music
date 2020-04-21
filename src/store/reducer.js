import {combineReducers} from 'redux-immutable';
import {reducer as recommendReducer} from './modules/recommend';

export default combineReducers({
  recommend: recommendReducer,
});
