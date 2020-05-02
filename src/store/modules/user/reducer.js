import actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  info: {},
  record: [],
  collect: [],
  loading: false,
  state: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
  case actionTypes.CHANGE_USER:
    return state.merge({ info: action.data });
  case actionTypes.CHANGE_USER_RECORD:
    return state.merge({ record: action.data });
  case actionTypes.CHANGE_USER_COLLECT:
    return state.merge({ collect: action.data });
  case actionTypes.CHANGE_LOADING:
    return state.merge({ loading: action.data });
  case actionTypes.CHANGE_STATE:
    return state.merge({ state: action.data });
  default:
    return state;
  }
}
