import actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  bannerList: [],
  recommendList: [],
  recommendSongs: [],
});
export default (state = defaultState, action) => {
  switch (action.type) {
  case actionTypes.CHANGE_BANNER:
    return state.merge({ bannerList: action.data });
  case actionTypes.CHANGE_RECOMMEND:
    return state.merge({ recommendList: action.data });
  case actionTypes.CHANGE_RECOMMEND_SONGS:
    return state.merge({ recommendSongs: action.data });
  default:
    return state;
  }
}
