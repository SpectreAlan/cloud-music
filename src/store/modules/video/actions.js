import actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import Request from '../../../api/video';

export const changeVideoList = (data) => ({
  type: actionTypes.CHANGE_VIDEO,
  data: fromJS(data)
});

export const changeTypesList = (data) => ({
  type: actionTypes.CHANGE_TYPES,
  data: fromJS(data)
});

export const changeLoading = (data) => ({
  type: actionTypes.CHANGE_LOADING,
  data
});

export const getCurrentVideoList = (id) => (dispatch) => {
  dispatch(changeLoading(true));
  Request.videos({ id }).then((res) => {
    dispatch(changeVideoList(res.datas));
    dispatch(changeLoading(false));
  })
    .catch(() => {
      console.log('video数据传输错误');
    })
};

export const getTypes = () => (dispatch) => {
  dispatch(changeLoading(true));
  Request.types().then((res) => {
    dispatch(changeTypesList(res.data));
  })
    .catch(() => {
      console.log('类型数据传输错误');
    })
};
