import { HelpDetail } from '@/entities/help/model/types';
import { axiosInstance } from '@/shared/api';
import { ResponseType } from '@/shared/type';

import { HelpApplicationMessageFormValues } from './types';

type HelpDetailResponse = ResponseType<HelpDetail>;

export async function getHelpDetail(helpId: number): Promise<HelpDetail> {
  const response = await axiosInstance.get<HelpDetailResponse>(
    `/helps/${helpId}`,
  );
  const { data } = response;

  if (data.resultType === 'FAIL') {
    throw new Error(data.error.reason);
  }

  return data.success;
}

export async function postHelpApply({
  helpId,
  data,
}: {
  helpId: number;
  data: HelpApplicationMessageFormValues;
}) {
  const response = await axiosInstance.post(`/helps/${helpId}/apply`, data);

  if (response.data.resultType === 'FAIL') {
    throw new Error(response.data.error.reason);
  }

  return response.data.success;
}
