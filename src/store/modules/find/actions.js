import actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import { banner, personalized, recommendSongs, dailyRecommendation } from '../../../api/find';

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
});

export const changeLoading = (data) => ({
  type: actionTypes.CHANGE_LOADING,
  data
});

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND,
  data: fromJS(data)
});

export const changeRecommendSongs = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_SONGS,
  data: fromJS(data)
});

export const changeDailyRecommendation = (data) => ({
  type: actionTypes.CHANGE_DailyRecommendation,
  data: fromJS(data)
});

export const getBannerList = () => (dispatch) => {
  banner().then((res) => {
    dispatch(changeBannerList(res.banners));
  })
};

export const getRecommendList = () => (dispatch) => {
  personalized().then((res) => {
    dispatch(changeRecommendList(res.playlists));
  })
};

export const getRecommendSongs = () => (dispatch) => {
  recommendSongs().then((res) => {
    dispatch(changeRecommendSongs(res.result));
  })
};

export const getDailyRecommendation = () => (dispatch) => {
  dispatch(changeLoading(true))
  dailyRecommendation().then((res) => {
    dispatch(changeDailyRecommendation(res.data.dailySongs));
    dispatch(changeLoading(false))
  })
};
