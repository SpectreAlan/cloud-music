import actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  list: [],
  types: [],
  loading: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
  case actionTypes.CHANGE_VIDEO:
    return state.merge({ list: action.data });
  case actionTypes.CHANGE_TYPES:
    return state.merge({ types: action.data });
  case actionTypes.CHANGE_LOADING:
    return state.merge({ loading: action.data });
  default:
    return state;
  }
}
