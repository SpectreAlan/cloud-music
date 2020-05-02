import actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import Request from '../../../api/user';

export const changeUser = (data) => ({
  type: actionTypes.CHANGE_USER,
  data: fromJS(data)
});

export const changRecord = (data) => ({
  type: actionTypes.CHANGE_USER_RECORD,
  data: fromJS(data)
});

export const changCollect = (data) => ({
  type: actionTypes.CHANGE_USER_COLLECT,
  data: fromJS(data)
});

export const changeLoading = (data) => ({
  type: actionTypes.CHANGE_LOADING,
  data
});

export const changeState = (data) => ({
  type: actionTypes.CHANGE_STATE,
  data
});

export const login = (param, router) => (dispatch) => {
  dispatch(changeLoading(true));
  Request.login(param).then((res) => {
    dispatch(changeUser(res));
    dispatch(changeLoading(false));
    dispatch(changeState(true));
    router.push('/');
  })
    .catch(() => {
      console.log('登陆错误');
    })
};

export const getRecord = (param) => (dispatch) => {
  dispatch(changeLoading(true));
  Request.record(param).then((res) => {
    dispatch(changRecord(res.weekData));
    dispatch(changeLoading(false));
  })
    .catch(() => {
      console.log('信息获取错误');
    })
};

export const getCollect = (param) => (dispatch) => {
  dispatch(changeLoading(true));
  Request.collect(param).then((res) => {
    dispatch(changCollect(res.playlist));
    dispatch(changeLoading(false));
  })
    .catch(() => {
      console.log('信息获取错误');
    })
};
