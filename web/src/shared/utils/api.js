import axios from 'axios';

const defaults = {
  baseURL: 'http://localhost:5001',
  headers: () => ({
    'Content-Type': 'application/json',
  }),
  error: {
    code: 'INTERNAL_ERROR',
    message: 'Something went wrong. Please check your internet connection or contact our support.',
    status: 503,
    data: {},
  },
};

const api = (method, url, variables) =>
  new Promise((resolve, reject) => {
    debugger;
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      params: method === 'get' ? variables : undefined,
      data: method !== 'get' ? variables : undefined,
    }).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        if (error.response) {
          reject(error.response.data.error);
        } else {
          reject(defaults.error);
        }
      },
    );
  });

const download = (url, params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${url}`,
      method: 'POST',
      responseType: 'blob',
      data: params,
    }).then(
      (response) => {
        resolve(response);
      },
      (error) => {
        if (error.response) {
          reject(error.response.error);
        } else {
          reject(defaults.error);
        }
      },
    );
  });
};

export default {
  get: (...args) => api('get', ...args),
  post: (...args) => api('post', ...args),
  put: (...args) => api('put', ...args),
  patch: (...args) => api('patch', ...args),
  delete: (...args) => api('delete', ...args),
  download,
};
