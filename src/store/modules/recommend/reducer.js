import actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  bannerList: [],
  recommendList: [],
});
export default (state = defaultState, action) => {
  switch (action.type) {
  case actionTypes.CHANGE_BANNER:
    return state.merge({bannerList: action.data});
  case actionTypes.CHANGE_RECOMMEND:
    return state.merge({recommendList: action.data});
  default:
    return state;
  }
}
