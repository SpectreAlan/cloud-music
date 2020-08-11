import actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import { types, videos } from '../../../api/video';

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
  videos({ id }).then((res) => {
    dispatch(changeVideoList(res.datas));
    dispatch(changeLoading(false));
  })
};

export const getTypes = () => (dispatch) => {
  dispatch(changeLoading(true));
  types().then((res) => {
    dispatch(changeTypesList(res.data));
  })
};
