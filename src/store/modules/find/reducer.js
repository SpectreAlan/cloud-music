import actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  bannerList: [],
  recommendList: [],
  recommendSongs: [],
  dailyRecommendationList: [],
  loading: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
  case actionTypes.CHANGE_BANNER:
    return state.merge({ bannerList: action.data });
  case actionTypes.CHANGE_RECOMMEND:
    return state.merge({ recommendList: action.data });
  case actionTypes.CHANGE_DailyRecommendation:
    return state.merge({ dailyRecommendationList: action.data });
  case actionTypes.CHANGE_RECOMMEND_SONGS:
    return state.merge({ recommendSongs: action.data });
  case actionTypes.CHANGE_LOADING:
    return state.merge({ loading: action.data });
  default:
    return state;
  }
}
