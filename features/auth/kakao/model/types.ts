import { ResponseType } from '@/shared/type';

export interface LoginSuccessResponse {
  message: string;
  accessToken: string;
  expiresAt: string;
}

export type LoginResponse = ResponseType<LoginSuccessResponse>;
