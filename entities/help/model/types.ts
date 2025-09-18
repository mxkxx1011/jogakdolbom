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

export type HelpRequestStatus = 0 | 1 | 2 | 3 | 4;
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

export type HelpHistoryStatus = 0 | 1; //(status 0: 요청, 1: 배정)
export interface HelpApplicant {
  helperId: number;
  imageUrl: string | null;
}

export interface AssignedHelper {
  nickname: string;
  imageUrl: string | null;
  reviewCount: number;
  avgRating: number;
  message: string;
}

export interface HelpHistoryRequest {
  id: number;
  serviceDate: string;
  startTime: string;
  endTime: string;
  helpType: HelpType;
  helpTypeText: HelpTextType;
  status: 0;
  applicants: HelpApplicant[];
  assignedHelper: null;
}

export interface HelpHistoryAssigned {
  id: number;
  serviceDate: string;
  startTime: string;
  endTime: string;
  helpType: HelpType;
  helpTypeText: HelpTextType;
  status: 1;
  applicants: HelpApplicant[];
  assignedHelper: AssignedHelper;
}

export type HelpHistory = HelpHistoryRequest | HelpHistoryAssigned;

export type HelpStatus = 0 | 1 | 2 | 3 | 4;
export interface HelpFilter {
  page: number;
  size: number;
  status?: HelpStatus;
  helpTypes: HelpType[];
}

export type AppliedFilter = Pick<HelpFilter, 'status' | 'helpTypes'>;

export interface HelpApplicantDetail {
  applicationId: number;
  status: number; // 범위가 어떻게 되는지
  statusText: string; // 수락말고 뭐가 있는지
  createdAt: string;
  help: {
    id: number;
    helpType: HelpType;
    helpTypeText: HelpTextType;
    serviceDate: string;
    startTime: string;
    endTime: string;
    addressText: string;
    rewardTokens: number;
    requester: {
      id: number;
      nickname: string;
      imageUrl: string | null;
      reviewCount: number;
      avgRating: number;
    };
  };
}

export interface HelpApplyResponse {
  applications: HelpApplicantDetail[];
  pagination: Pagination;
}
