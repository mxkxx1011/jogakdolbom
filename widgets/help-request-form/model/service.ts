import { HelpRequest } from '@/entities/help';
import { axiosInstance } from '@/shared/api';
import { type ResponseType } from '@/shared/type';

interface HelpSuccessResponse {
  message: string;
}

type HelpRequestType = ResponseType<HelpSuccessResponse>;

export async function postHelpRequest(data: HelpRequest) {
  const res = await axiosInstance.post<HelpRequestType>('/helps', data);
  const resData = res.data;

  if (resData.resultType === 'FAIL') {
    throw new Error(resData.error.reason);
  }
}
