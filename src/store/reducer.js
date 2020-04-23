import { combineReducers } from 'redux-immutable';
import { reducer as findReducer } from './modules/find';
import { reducer as mvReducer } from './modules/mv';

export default combineReducers({
  find: findReducer,
  mv: mvReducer,
});
