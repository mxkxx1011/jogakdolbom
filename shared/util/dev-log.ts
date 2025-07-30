/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios';

import { isDevelop } from './is-develop';

/* eslint-disable no-console */
export const log = {
  common(message: string, data?: any) {
    if (isDevelop()) {
      console.group('[COMMON] 확인용 로그');
      console.log('확인 메시지 : ', message);
      console.log('data : ', data);
      console.groupEnd();
    }
  },

  error(error: AxiosError) {
    if (isDevelop()) {
      console.group('[ERROR] API Error:');
      console.log('status : ', error.response?.status);
      console.log('Error : ', error.message);
      console.log('response : ', error.response?.data);
      console.groupEnd();
    }
  },

  request(config: AxiosRequestConfig) {
    if (isDevelop()) {
      console.group('[API REQUEST] request: ');
      console.log('config: ', {
        method: config.method,
        url: config.url,
        headers: config.headers,
        data: config.data,
      });
      console.groupEnd();
    }
  },

  response(response: AxiosResponse) {
    if (isDevelop()) {
      console.group(
        `✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`,
      );
      console.log('Status:', response.status);
      console.log('Data:', response.data);
      console.groupEnd();
    }
  },

  performance(startTime: number, endTime: number, url: string) {
    if (isDevelop()) {
      const duration = endTime - startTime;
      console.log(`⏱️ API Performance: ${url} - ${duration.toFixed(2)}ms`);
    }
  },
};
