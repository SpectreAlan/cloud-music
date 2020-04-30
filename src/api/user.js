import Http from '../axios';

const urls = {
  LOGIN: '/login/cellphone',
};

class Request {
  login = (params) => Http.post(urls.LOGIN, params);
}

export default new Request();
