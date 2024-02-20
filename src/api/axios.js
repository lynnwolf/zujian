import axios from 'axios';

axios.defaults.timeout = 10000;
//返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500; // 默认的
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

axios.interceptors.request.use(config => {
  // 这里可设置请求头等信息
  if (options && options.body) {
    config.data = options.body;
  }
  return config;
})

axios.interceptors.response.use(response => {
  return response.data
})

export default axios;
