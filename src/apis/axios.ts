import { getCookie } from '@/utils/cookie';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_URL}`,
  timeout: 2000,
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers.Authorization = `Bearer ${getCookie('accessToken')}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default instance;
