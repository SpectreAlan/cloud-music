import Http from '../axios';

const urls = {
  LOGIN: '/login/cellphone',
  RECORD: '/user/record',
  COLLECT: '/user/playlist',
};

class Request {
  login = (params) => Http.post(urls.LOGIN, params);
  record = (params) => Http.post(urls.RECORD, params);
  collect = (params) => Http.post(urls.COLLECT, params);
}

export default new Request();
