/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from 'axios';

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
    if (typeof window !== 'undefined') {
      const userInfo = localStorage.getItem('userInfo');
      const token = userInfo ? JSON.parse(userInfo).state.accessToken : null;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
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
    const err = error as AxiosError<any>;
    const status = err.response?.status;

    if (status === 401) {
      // 토큰 만료 등 인증 실패
      if (typeof window !== 'undefined') {
        // localStorage 정리
        localStorage.removeItem('userInfo');
        useUserStore.getState().reset();
        toast.error('로그인이 만료되었어요. 다시 로그인해주세요');
      }
    } else if (!status) {
      // ✅ 네트워크/타임아웃/CORS 등 response 없는 케이스
      // err.code 예: 'ERR_NETWORK', 'ECONNABORTED'
      if (typeof window !== 'undefined') {
        toast.error('네트워크 오류가 발생했어요. 잠시 후 다시 시도해주세요.');
      }
      console.error('Network/Axios error:', error.code, error.message);
    }

    return Promise.reject(error);
  },
);

export { axiosInstance };
