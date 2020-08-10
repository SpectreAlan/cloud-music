import Request from '../axios';

export function types () {
  return Request.post('/video/group/list')
}

export function videos (data) {
  return Request.post('/video/group', data)
}

