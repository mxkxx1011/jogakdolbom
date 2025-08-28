import { z } from 'zod';

import { Pagination } from '@/shared/type';

export type HelpType = 1 | 2 | 3 | 4;
export type HelpTextType =
  | '등/하원 돌봄'
  | '놀이 돌봄'
  | '동행 돌봄'
  | '기타 돌봄';

export const HelpRequestSchema = z.object({
  helpType: z.enum(['1', '2', '3', '4']),
  serviceDate: z.string().min(1, { message: '서비스 날짜를 선택해주세요.' }),
  addressText: z.string().min(1, { message: '상세 주소를 선택해주세요.' }),
  startTime: z.string().min(1, { message: '시작 시간을 선택해주세요.' }),
  endTime: z.string().min(1, { message: '종료 시간을 선택해주세요.' }),
  requestLocation: z
    .string()
    .min(1, { message: '서비스 위치를 입력해주세요.' }),
  requestDetail: z
    .string()
    .min(1, { message: '필요한 도움에 대한 상세 내용을 입력해주세요.' }),
  requestNote: z.string().optional(),
  //   image: z.instanceof(File).optional(),
});

export type HelpRequest = z.infer<typeof HelpRequestSchema>;

export type HelpRequestStatus = 0 | 1 | 2 | 3;
export type HelpRequestStatusText = '요청' | '배정' | '완료';

export interface Help {
  id: number;
  helpType: HelpType;
  helpTypeText: string;
  serviceDate: string;
  startTime: string;
  endTime: string;
  addressText: string;
  rewardTokens: number;
  createdAt: string;
  updatedAt: string;
  durationMinutes: number;
  requester: HelpRequester;
}

export interface HelpRequester {
  id: number;
  nickname: string;
  imageUrl: string | null;
  avgRating: number;
  reviewCount: number;
}

export interface HelpData {
  requests: Help[];
  pagination: Pagination;
}

export interface HelpDetail {
  id: number;
  helpType: HelpType;
  helpTypeText: HelpTextType;
  serviceDate: string;
  startTime: string;
  endTime: string;
  addressText: string;
  requestLocation: string;
  requestDetail: string;
  requestNote: string | null;
  status: HelpRequestStatus;
  statusText: HelpRequestStatusText;
  imageUrl: string | null;
  rewardTokens: number;
  requester: HelpRequester;
  createdAt: string;
  updatedAt: string;
}
