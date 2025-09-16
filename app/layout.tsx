import Script from 'next/script';
import { type ReactNode } from 'react';

import { QueryProvider } from '@/shared/api';
import { SITE } from '@/shared/config/seo';
import { GoogleAnalytics } from '@/shared/lib/google-analytics';
import { Modal, Toaster } from '@/shared/ui';
import { Header } from '@/widgets/header';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  alternates: {
    canonical: SITE.domain,
  },
  openGraph: {
    type: 'website',
    url: SITE.domain,
    title: SITE.name,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} 미리보기`,
      },
    ],
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  icons: SITE.icons,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ko'>
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <Script
          strategy='beforeInteractive'
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&autoload=false`}
        />

        <div id='_modal' />
        <div id='_toast' />
        <QueryProvider>
          <Header />
          {children}
          <Toaster />
          <Modal />
        </QueryProvider>
      </body>
    </html>
  );
}
