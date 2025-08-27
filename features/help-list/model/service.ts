import { HelpData } from '@/entities/help/model/types';
import { axiosInstance } from '@/shared/api';
import { ResponseType } from '@/shared/type';

type GetHelpListResponse = ResponseType<HelpData>;

export async function getHelpList(): Promise<HelpData> {
  const response = await axiosInstance.get<GetHelpListResponse>('/helps');

  const data = response.data;

  if (data.resultType === 'FAIL') {
    throw new Error(data.error.reason);
  }

  return data.success;
}
