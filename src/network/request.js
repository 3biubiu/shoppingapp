import axios from "axios";

export function instance1(config, success, fail) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/hy66",
    timeout: 5000
  });
  //发送真正的网络请求
  instance(config)
    .then(res => {
      success(res);
    })
    .catch(err => {
      fail(err);
    });
}

// instance2优化 不需要返回pormise  axios自身会返回

export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/hy66",
    timeout: 7000,
  });
  instance.interceptors.request.use(config => {
      // console.log(config);
      return config
      //拦截器 比如显示loading图标 show动画
      //某下网络请求必须携带特殊信息 比如登录令牌token
      //过滤非法请求
  },err =>{
      // console.log(err);
  })
  instance.interceptors.response.use(res => {
      // console.log(res);
       return res.data;
  },err => {
      // console.log(err);
  })
  //发送真正的网络请求
  return instance(config);
}
