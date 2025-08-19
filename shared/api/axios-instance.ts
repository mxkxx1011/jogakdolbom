import axios from 'axios';

import { useUserStore } from '@/entities/user/model';

import { toast } from '../ui';
import { log } from '../util';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TIMEOUT = Number(process.env.NEXT_PUBLIC_API_TIMEOUT ?? '5000');

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem('userInfo');
    const token = userInfo ? JSON.parse(userInfo).state.accessToken : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    log.error(error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response } = error;
    const { status } = response;

    if (status === 401) {
      useUserStore.getState().reset();
      toast.error('로그인이 만료되었어요. 다시 로그인해주세요');
    }
  },
);

export { axiosInstance };
