import { axiosInstance } from '@/shared/api';
import { ResponseType } from '@/shared/type';

type Response = ResponseType<{ message: string }>;

export async function deleteHelp({
  helpId,
}: {
  helpId: number;
}): Promise<void> {
  const response = await axiosInstance.delete<Response>(`/helps/${helpId}`);

  const { data } = response;

  if (data.resultType === 'FAIL') {
    throw new Error(data.error.reason);
  }
}
