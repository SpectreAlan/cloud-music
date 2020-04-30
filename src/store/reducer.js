import { combineReducers } from 'redux-immutable';
import { reducer as findReducer } from './modules/find';
import { reducer as videoReducer } from './modules/video';
import { reducer as userReducer } from './modules/user';

export default combineReducers({
  find: findReducer,
  video: videoReducer,
  user: userReducer,
});
