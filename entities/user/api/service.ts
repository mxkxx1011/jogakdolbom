import { axiosInstance } from '@/shared/api';
import { ResponseType } from '@/shared/type';

import type { User } from '../model';

export async function getUserInfo(): Promise<User> {
  const response = await axiosInstance.get<ResponseType<User>>('/auth/me');
  const data = response.data;

  if (data.resultType === 'SUCCESS') {
    return data.success; // 여기서는 T로 내로잉
  }

  throw new Error(data.error.reason || '유저 정보 조회 실패');
}
