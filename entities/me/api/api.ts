import { axiosInstance } from '@/shared/api';
import { ResponseType } from '@/shared/type';

import { Me } from '../model/types';

type MeResponse = ResponseType<Me>;

export async function getMe(): Promise<Me> {
  const response = await axiosInstance.get<MeResponse>('/users/me');
  const { data } = response;

  if (data.resultType === 'FAIL') {
    throw new Error(data.error.reason);
  }

  return data.success;
}
