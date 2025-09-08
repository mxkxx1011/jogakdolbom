import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/kakao')) {
    return NextResponse.next();
  }

  // 토큰 가져오기 (쿠키 이름은 상황에 맞게 수정)

  // const token = request.cookies.get('accessToken');

  // if (!token) {
  //   const loginUrl = new URL('/kakao', request.url);
  //   return NextResponse.redirect(loginUrl);
  // }

  return NextResponse.next();
}

// 🔒 보호할 경로 지정
export const config = {
  matcher: [
    '/helps/new', // 돌봄 요청/참여 페이지
    '/helps/:helpId*',
    '/mypage/:path*', // 마이페이지
  ],
};
