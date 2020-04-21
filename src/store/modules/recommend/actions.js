import actionTypes from './actionTypes';
import {fromJS} from 'immutable';
import Request from '../../../api/recommend';

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
});

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND,
  data: fromJS(data)
});

export const getBannerList = () => (dispatch) => {
  Request.banner().then((res) => {
    dispatch(changeBannerList(res.data));
  })
    .catch(() => {
      console.log('轮播图数据传输错误');
    })
};

export const getRecommendList = () => (dispatch) => {
  Request.personalized().then((res) => {
    dispatch(changeRecommendList(res.data));
  })
    .catch(() => {
      console.log('推荐歌单数据传输错误');
    });
};
