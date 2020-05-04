import actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import Request from '../../../api/find';

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
  Request.banner().then((res) => {
    dispatch(changeBannerList(res.banners));
  })
    .catch(() => {
      console.log('轮播图数据传输错误');
    })
};

export const getRecommendList = () => (dispatch) => {
  Request.personalized().then((res) => {
    dispatch(changeRecommendList(res.playlists));
  })
    .catch(() => {
      console.log('推荐歌单数据传输错误');
    });
};

export const getRecommendSongs = () => (dispatch) => {
  Request.recommendSongs().then((res) => {
    dispatch(changeRecommendSongs(res.result));
  })
    .catch(() => {
      console.log('推荐歌曲数据传输错误');
    });
};

export const getDailyRecommendation = () => (dispatch) => {
  dispatch(changeLoading(true))
  Request.dailyRecommendation().then((res) => {
    dispatch(changeDailyRecommendation(res.recommend));
    dispatch(changeLoading(false))
  })
    .catch(() => {
      dispatch(changeLoading(false))
      console.log('推荐每日歌曲数据传输错误');
    });
};
