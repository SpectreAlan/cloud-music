import actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import Request from '../../../api/user';

export const changeUser = (data) => ({
  type: actionTypes.CHANGE_USER,
  data: fromJS(data)
});

export const changeLoading = (data) => ({
  type: actionTypes.CHANGE_LOADING,
  data
});

export const login = (param, router) => (dispatch) => {
  dispatch(changeLoading(true));
  Request.login(param).then((res) => {
    dispatch(changeUser(res));
    dispatch(changeLoading(false));
    router.push('/');
  })
    .catch(() => {
      console.log('登陆错误');
    })
};

