import Http from '../axios';

const urls = {
  BANNER: '/banner',
  PERSONALIZED: '/personalized'
};

class Request {
  banner = () => Http.post(urls.BANNER);
  personalized = () => Http.post(urls.PERSONALIZED);
}

export default new Request();
