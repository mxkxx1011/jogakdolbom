'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import { cn } from '@/shared/util';

function PageTab({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isMainpage = pathname === '/';

  return (
    <Link
      href={href}
      className={cn(
        'subtitle-1 whitespace-nowrap text-gray-400',
        'hover:underline hover:underline-offset-4 hover:text-main-green-600',
        (isActive || isMainpage) &&
          'text-main-green-800 hover:text-main-green-800',
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}

export { PageTab };
