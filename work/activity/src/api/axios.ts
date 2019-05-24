import axios from 'axios';
import qs from "qs";
// import Toast from '../components/Toast/index';

const ax = axios.create({
    baseURL: '',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',  // form-data
      // 'Content-Type': 'application/json;charse=UTF-8', // json
    },
    // 设置超时s
    timeout: 30000,
});

// 拦截器
ax.interceptors.request.use(
  config => {
    if (
      config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete' ||
      config.method === 'patch'
    ) {
      config.data = qs.stringify(config.data);  // form-data
      // config.data = JSON.stringify(config.data); // json
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

ax.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default ax;
