import Http from '../axios';

const urls = {
  MV: '/mv/all',
};

class Request {
  mv = () => Http.post(urls.MV);
}

export default new Request();
