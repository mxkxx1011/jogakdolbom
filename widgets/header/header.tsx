import { IconBell, IconPeople } from '@/shared/asset';
import { HeaderCore, IconList, Logo, PageTab, PageTabs } from '@/shared/ui';
import { IconButton } from '@/shared/ui/icon-list/icon-button';

function Header() {
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
      right={
        <IconList>
          <IconButton aria-label='알림'>
            <IconBell />
          </IconButton>
          <IconButton aria-label='사용자프로필'>
            <IconPeople />
          </IconButton>
        </IconList>
      }
    />
  );
}

export { Header };
