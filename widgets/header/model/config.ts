import { ComponentType, SVGProps } from 'react';

import { IconPeople } from '@/shared/asset';

type NavItem = {
  label: string;
  href: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  activeMatch?: RegExp; // 활성 상태 매칭
  auth?: 'any' | 'guest' | 'user';
  visible?: (ctx: { isLoggedIn: boolean }) => boolean;
  prefetch?: boolean;
};

export const MAIN_TABS: NavItem[] = [
  {
    label: '돌봄 요청',
    href: '/helps/new',
    activeMatch: /^\/helps\/new$/,
    auth: 'any',
  },
  {
    label: '돌봄 참여',
    href: '/helps',
    activeMatch: /^\/helps$/,
    auth: 'any',
  },
];

export const RIGHT_ACTIONS: NavItem[] = [
  { label: '로그인', href: '/kakao', auth: 'guest', prefetch: false },
  {
    label: '마이페이지',
    href: '/mypage',
    icon: IconPeople,
    auth: 'user',
    prefetch: false,
  },
];
