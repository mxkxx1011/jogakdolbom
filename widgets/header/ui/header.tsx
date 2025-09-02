'use client';

import Link from 'next/link';
import { useMemo } from 'react';

import { useUserStore } from '@/entities/user/model/user-store';
import {
  Button,
  HeaderCore,
  IconList,
  Logo,
  PageTab,
  PageTabs,
} from '@/shared/ui';

import { MAIN_TABS, RIGHT_ACTIONS } from '../model/config';

function Header() {
  const { isLoggedIn } = useUserStore();

  const visibleTabs = useMemo(
    () =>
      MAIN_TABS.filter(
        (i) => (i.auth === 'user' ? isLoggedIn : i.auth === 'guest' ? !isLoggedIn : true),
      ),
    [isLoggedIn],
  );

  const rightTabs = useMemo(() => {
    const items = RIGHT_ACTIONS.filter((i) =>
      i.auth === 'user' ? isLoggedIn : i.auth === 'guest' ? !isLoggedIn : true,
    );

    return (
      <IconList>
        {items.map((item) =>
          item.icon ? (
            <Button
              key={item.href}
              variant='ghost'
              size='icon'
              asChild
              aria-label={item.label}
            >
              <Link href={item.href} prefetch={item.prefetch}>
                <item.icon width={20} height={20} />
              </Link>
            </Button>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              prefetch={item.prefetch ?? true}
              className='body-8 text-main-green-600 hover:text-main-green-700 px-2 py-1 hover:underline hover:underline-offset-4'
            >
              {item.label}
            </Link>
          ),
        )}
      </IconList>
    );
  }, [isLoggedIn]);


  return (
    <HeaderCore
      left={<Logo />}
      center={
        <PageTabs>
          {visibleTabs.map((tab) => (
            <PageTab
              key={tab.href}
              href={tab.href}
              activeMatch={tab.activeMatch}
              prefetch={tab.prefetch}
            >
              {tab.label}
            </PageTab>
          ))}
        </PageTabs>
      }
      right={rightTabs}

    />
  );
}

export { Header };
