import { HelpRequestStatus, HelpType } from '@/entities/help';
import { Pagination } from '@/shared/type';

interface Help {
  id: number;
  helpType: HelpType;
  helpTypeText: string;
  status: HelpRequestStatus;
  statusText: string;
}

export interface HelpApplicantDetail {
  applicationId: number;
  status: HelpRequestStatus;
  statusText: string;
  message: string;
  createdAt: string;
  helper: {
    id: number;
    nickname: string;
    profileImageUrl: string | null;
    reviewCount: number;
    ratingAvg: number;
  };
}

export interface HelpHistoryApplicantResponse {
  help: Help;
  totalApplicants: number;
  applicants: HelpApplicantDetail[];
  pagination: Pagination;
}
