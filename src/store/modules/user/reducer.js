import actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  user: {},
  loading: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
  case actionTypes.CHANGE_USER:
    return state.merge({ user: action.data });
  case actionTypes.CHANGE_LOADING:
    return state.merge({ loading: action.data });
  default:
    return state;
  }
}
