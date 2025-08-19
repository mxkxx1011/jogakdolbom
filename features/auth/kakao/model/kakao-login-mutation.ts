import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useUserStore } from '@/entities/user/model';
import { toast } from '@/shared/ui';

import { postKakaoLogin } from './service';

function useKakaoLoginMutation() {
  const router = useRouter();

  const { login } = useUserStore();

  return useMutation({
    mutationFn: (code: string) => postKakaoLogin(code),
    onSuccess: (data) => {
      login(data.accessToken);
      toast.success('로그인 성공');
      router.push('/');
    },
    onError: () => {
      toast.error('로그인 실패');
    },
  });
}

export { useKakaoLoginMutation };
