import { type ReactNode } from 'react';

import { Toaster, Modal } from '@/shared/ui';

import QueryProvider from './providers/query-provider';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: '조각돌봄',
  description: '돌봄의 조각들을 이웃들과 나눠보세요',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <div id='_modal' />
        <div id='_toast' />
        <QueryProvider>
          {children}
          <Toaster />
          <Modal />
        </QueryProvider>
      </body>
    </html>
  );
}
