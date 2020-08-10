import axios from 'axios'
import { request } from '../config'
import { createHashHistory } from 'history'
const router = createHashHistory()
class Request {
  constructor () {
    this.instance = axios.create({
      baseURL: request.baseURL,
      timeout: 5000,
      withCredentials: true
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (sessionStorage.getItem('req_' + config.baseURL + config.url)) {
          const msg = '请求已发出，请勿重复点击'
          return Promise.reject(msg)
        }
        sessionStorage.setItem('req_' + config.baseURL + config.url, 'stop')
        return config
      },
      (error) => Promise.reject(error)
    )
    this.instance.interceptors.response.use(
      (response) => {
        sessionStorage.removeItem('req_' + response.config.url)
        return response.data
      },
      (error) => {
        sessionStorage.removeItem('req_' + error.response.config.url)
        if (error.response.status === 301) {
          router.push('/login')
        }
        return Promise.reject(error)
      }
    )
  }

  post (url, params = {},) {
    return new Promise((resolve, reject) => {
      this.instance
        .post(url, params, {
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        })
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  get (url) {
    return new Promise((resolve, reject) => {
      this.instance
        .get(url)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default new Request()
