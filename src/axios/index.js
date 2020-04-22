import axios from 'axios';
import { request } from '../config';
class Request {
  constructor () {
    this.instance = axios.create({
      baseURL: request.baseURL,
      timeout: request.timeout
    });
  }

  setToken = (token) => {
    this.instance.defaults.headers.common['Authorization'] = token;
  };

  authentication = (str) => {
    let errJson = JSON.parse(str);
    if (errJson.response && errJson.response.status === 401) {
      console.error('用户认证出错，正在跳转登录页面！');
      setTimeout(() => {
        localStorage.removeItem('persist:root');
        window.location.href = '/login';
      }, 1500);
    }
  };

  upload (url, formData) {
    return new Promise((resolve, reject) => {
      this.instance
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          let errStr = JSON.stringify(error);
          this.authentication(errStr);
          reject(errStr);
        });
    });
  }

  get (url, params = {}) {
    return new Promise((resolve, reject) => {
      this.instance
        .get(url, { params: { ...params } })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          let errStr = JSON.stringify(error);
          this.authentication(errStr);
          reject(errStr);
        });
    });
  }

  post (url, params = {}) {
    return new Promise((resolve, reject) => {
      this.instance
        .post(url, { ...params })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          let errStr = JSON.stringify(error);
          if (url.includes('login')) {
            reject(errStr);
          } else {
            this.authentication(errStr);
          }
        });
    });
  }
}

export default new Request();
