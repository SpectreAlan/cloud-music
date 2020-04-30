import Http from '../axios';

const urls = {
  TYPES: '/video/group/list',
  VIDEO: '/video/group'
};

class Request {
  types = () => Http.post(urls.TYPES);
  videos = (params) => Http.post(urls.VIDEO, params);
}

export default new Request();
