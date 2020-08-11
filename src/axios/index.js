import axios from 'axios'
import { request } from '../config'
import { message } from 'antd';

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
          message.info(msg)
          return Promise.reject(msg)
        }
        sessionStorage.setItem('req_' + config.baseURL + config.url, 'stop')
        return config
      },
      (error) => Promise.reject(error)
    )
    this.instance.interceptors.response.use(
      (response) => {
        sessionStorage.removeItem('req_' + response.config.baseURL + response.config.url)
        return response.data
      },
      (error) => {
        const res = error.response
        message.error(res.data.msg)
        sessionStorage.removeItem('req_' + res.config.baseURL + res.config.url)
        if (res.status === 301) {
          window.location = '/#/login'
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
