import Http from '../axios';

const urls = {
  BANNER: '/banner',
  PERSONALIZED: '/top/playlist',
  RECOMMEND_SONGS: '/personalized/newsong'
};

class Request {
  banner = () => Http.post(urls.BANNER);
  personalized = () => Http.post(urls.PERSONALIZED);
  recommendSongs = () => Http.post(urls.RECOMMEND_SONGS);
}

export default new Request();
