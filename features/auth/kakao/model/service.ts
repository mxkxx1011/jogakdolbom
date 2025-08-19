import { axiosInstance } from '@/shared/api';

import { LoginResponse, LoginSuccessResponse } from './types';

export async function postKakaoLogin(
  code: string,
): Promise<LoginSuccessResponse> {
  const response = await axiosInstance.post<LoginResponse>(
    '/auth/oauth2/callback/kakao',
    { code },
  );
  const data = response.data;

  if (data.resultType === 'SUCCESS') {
    return data.success;
  }

  throw new Error(data.error.reason);
}
