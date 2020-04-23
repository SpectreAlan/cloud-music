import actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import Request from '../../../api/mv';

export const changeMvList = (data) => ({
  type: actionTypes.CHANGE_MV,
  data: fromJS(data)
});

export const changeLoading = (data) => ({
  type: actionTypes.CHANGE_LOADING,
  data
});

export const getMvList = () => (dispatch) => {
  dispatch(changeLoading(true));
  Request.mv().then((res) => {
    dispatch(changeMvList(res.data));
    dispatch(changeLoading(false));
  })
    .catch(() => {
      console.log('mv数据传输错误');
    })
};
