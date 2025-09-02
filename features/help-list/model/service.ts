import qs from 'qs';

import { HelpData, HelpFilter } from '@/entities/help/model/types';
import { axiosInstance } from '@/shared/api';
import { ResponseType } from '@/shared/type';

type GetHelpListResponse = ResponseType<HelpData>;

export async function getHelpList({
  page,
  size,
  status,
  helpTypes,
}: HelpFilter): Promise<HelpData> {
  const response = await axiosInstance.get<GetHelpListResponse>('/helps', {
    params: {
      page,
      size,
      status,
      helpTypes,
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' });
    },
  });

  const data = response.data;

  if (data.resultType === 'FAIL') {
    throw new Error(data.error.reason);
  }

  return data.success;
}
