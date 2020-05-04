import Http from '../axios';

const urls = {
  BANNER: '/banner',
  PERSONALIZED: '/top/playlist',
  RECOMMEND_SONGS: '/personalized/newsong',
  DailyRecommendation: '/recommend/songs'
};

class Request {
  banner = () => Http.post(urls.BANNER);
  personalized = () => Http.post(urls.PERSONALIZED);
  recommendSongs = () => Http.post(urls.RECOMMEND_SONGS);
  dailyRecommendation = () => Http.post(urls.DailyRecommendation);
}

export default new Request();
