import axios, { type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_KEY } from '../utils/constant/storage';
import { isProd } from '../utils/common/common';
import { ApiErrorScheme } from '../exceptions/type';
import ApiException from '../exceptions/ApiException';
import CustomException from '../exceptions/CustomException';
import { errorMessage } from '../exceptions/messages';


const DEVELOPMENT_API_URL = 'https://www.aligoligo.store:7070';
const PRODUCTION_API_URL = 'https://www.aligoligo.store:8080';

const instance = axios.create({
  baseURL: isProd(import.meta.env.MODE) ? PRODUCTION_API_URL : DEVELOPMENT_API_URL,
  timeout: 15000,
});

const interceptorRequestFulfilled = (config: InternalAxiosRequestConfig) => {
  if (typeof window === 'undefined') return config;

  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.accessToken);
  console.log('intercep',accessToken)
  if (!config.headers) return config;
  if (!accessToken) return config;

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

instance.interceptors.request.use(interceptorRequestFulfilled);

// Response interceptor
const interceptorResponseFulfilled = (res: AxiosResponse) => {
    if (200 <= res.status && res.status < 300) {
      return res.data;
    }
  
    return Promise.reject(res.data);
  };


// Response interceptor
const interceptorResponseRejected = (error: AxiosError<ApiErrorScheme>) => {
    if (error.response?.data?.['response_messages']) {
      return Promise.reject(new ApiException(error.response.data, error.response.status));
    }
  
    if (error.message.startsWith('timeout')) {
      return Promise.reject(new CustomException(errorMessage.TIMEOUT, 'NETWORK_TIMEOUT'));
    }
  
    return Promise.reject(new CustomException(errorMessage.UNKNOWN_400, 'NETWORK_ERROR'));
  };
  
  instance.interceptors.response.use(interceptorResponseFulfilled, interceptorResponseRejected);



export const get = <T>(...args: Parameters<typeof instance.get>) => {
    return instance.get<T, T>(...args);
  };
  
  export const post = <T>(...args: Parameters<typeof instance.post>) => {
    return instance.post<T, T>(...args);
  };
  
  export const put = <T>(...args: Parameters<typeof instance.put>) => {
    return instance.put<T, T>(...args);
  };
  
  export const patch = <T>(...args: Parameters<typeof instance.patch>) => {
    return instance.patch<T, T>(...args);
  };
  
  export const del = <T>(...args: Parameters<typeof instance.delete>) => {
    return instance.delete<T, T>(...args);
  };
  
