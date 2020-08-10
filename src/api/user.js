import Request from '../axios';

export function loginReq (data) {
  return Request.post('/login/cellphone', data)
}

export function record (data) {
  return Request.post('/user/record', data)
}

export function collect (data) {
  return Request.post('/user/playlist', data)
}

