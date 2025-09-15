import { HelpApplicantDetail, HelpApplyResponse } from '@/entities/help';
import { axiosInstance } from '@/shared/api';
import { ResponseType } from '@/shared/type';

type Response = ResponseType<HelpApplyResponse>;

export async function getMyHelpApplyList({
  page,
  size,
}: {
  page: number;
  size: number;
}): Promise<HelpApplicantDetail[]> {
  const response = await axiosInstance.get<Response>('/helps/apply/me', {
    params: {
      page,
      size,
    },
  });

  const { data } = response;

  if (data.resultType === 'FAIL') {
    throw new Error(data.error.reason);
  }

  return data.success.applications;
}
