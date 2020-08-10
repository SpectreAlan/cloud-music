import Request from '../axios';

export function banner () {
  return Request.post('/banner')
}
export function personalized () {
  return Request.post('/top/playlist')
}

export function recommendSongs () {
  return Request.post('/personalized/newsong')
}

export function dailyRecommendation () {
  return Request.post('/recommend/songs')
}

