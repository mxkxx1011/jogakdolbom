'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import { cn } from '@/shared/util';

interface Props {
  href: string;
  children: ReactNode;
  activeMatch?: RegExp;
  prefetch?: boolean;
  className?: string;
}

function PageTab({ href, children, activeMatch, prefetch, className }: Props) {
  const pathname = usePathname();
  const isActive = activeMatch?.test(pathname) ?? pathname === href;
  const isMainpage = pathname === '/';

  return (
    <Link
      href={href}
      prefetch={prefetch}
      aria-current={isActive ? 'page' : undefined}

      className={cn(
        'subtitle-1 whitespace-nowrap text-gray-400',
        'hover:underline hover:underline-offset-4 hover:text-main-green-600',
        (isActive || isMainpage) &&
        'text-main-green-800 hover:text-main-green-800',
        className,
      )}
    >
      {children}
    </Link>
  );
}

export { PageTab };
