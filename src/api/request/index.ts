import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface IMyResponse {
  data: any;
  RetCode: number;
  msg: string;
  success: boolean;
}

const service = axios.create();
const JAVA_URL: string = process.env.JAVA_URL || '';
const PHP_URL: string = process.env.PHP_URL || '';

function handleDomain(url: string): string {
  if (url.includes('php')) return PHP_URL;
  return JAVA_URL;
}

function handleResponseFormat(response: AxiosResponse): IMyResponse {
  const { data, status } = response.data;
  return {
    data,
    RetCode: status.RetCode,
    msg: status.msg,
    success: status.RetCode === 0
  };
}

// request拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.baseURL = handleDomain(config.url || '');
    config.timeout = 8000;
    return config;
  },
  err => {
    if (!err.response) {
      console.error(err);
      return;
    }
  }
);

service.interceptors.response.use(
  res => {
    if (res.data.status) {
      console.log(res.data);
    }
    return res;
  },
  err => {
    console.error(err);
  }
);

const request = {
  get: (url: string, params?: object, config?: object) =>
    service
      .get(url, { params, ...config })
      .then((res: AxiosResponse): IMyResponse => handleResponseFormat(res)),
  post: (url: string, query: object, config?: object) =>
    service
      .post(url, query, config)
      .then((res: AxiosResponse): IMyResponse => handleResponseFormat(res)),
  delete: (url: string, params: object) =>
    service
      .delete(url, { params })
      .then((res: AxiosResponse): IMyResponse => handleResponseFormat(res)),
  put: (url: string, query: object) =>
    service
      .put(url, query)
      .then((res: AxiosResponse): IMyResponse => handleResponseFormat(res))
};

export default request;
