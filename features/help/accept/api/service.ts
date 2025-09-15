import { axiosInstance } from '@/shared/api';
import { ResponseDataType } from '@/shared/type';

interface DataType {
  applicationId: number;
  decision: 'accept' | 'reject';
}

type Response = ResponseDataType<{ message: string }>;

/**
 *
 * @param helpId 수락/거절할 대상이 속한 돌봄요청 ID
 * @param data - applicationId : 지원 id
 * @param data - decision : accpet | reject (수락/거절)
 */
export async function postAcceptHelpApplicant(
  helpId: number,
  data: DataType,
): Promise<void> {
  const response = await axiosInstance.post<Response>(
    `/helps/${helpId}/accept`,
    data,
  );

  if (response.data.resultType === 'FAIL') {
    throw new Error(response.data.error.reason);
  }
}
