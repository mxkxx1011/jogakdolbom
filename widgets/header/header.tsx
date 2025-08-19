'use client';

import { useRouter } from 'next/navigation';

import { useUserStore } from '@/entities/user/model/user-store';
import { IconBell, IconPeople } from '@/shared/asset';
import {
  Button,
  HeaderCore,
  IconList,
  Logo,
  PageTab,
  PageTabs,
  IconButton,
} from '@/shared/ui';

function Header() {
  const router = useRouter();

  const { isLoggedIn } = useUserStore();

  const RightComponent = isLoggedIn ? (
    <IconList>
      <IconButton aria-label='알림'>
        <IconBell />
      </IconButton>
      <IconButton aria-label='마이페이지'>
        <IconPeople />
      </IconButton>
    </IconList>
  ) : (
    <Button
      size='fit'
      variant='link'
      onClick={() => {
        router.push('/kakao');
      }}
      className='text-main-green-700'
    >
      로그인
    </Button>
  );

  return (
    <HeaderCore
      left={<Logo />}
      center={
        <PageTabs>
          <PageTab href='/helps/new'>돌봄 요청</PageTab>
          <PageTab href='/helps'>돌봄 참여</PageTab>
          <PageTab href='/store'>조각 상점</PageTab>
        </PageTabs>
      }
      right={RightComponent}
    />
  );
}

export { Header };
