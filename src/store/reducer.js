import { combineReducers } from 'redux-immutable';
import { reducer as findReducer } from './modules/find';

export default combineReducers({
  find: findReducer,
});
