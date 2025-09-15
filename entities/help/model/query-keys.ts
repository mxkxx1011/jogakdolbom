import { AppliedFilter } from './types';

export const HelpQueryKeys = {
  all: ['helps'] as const,
  list: (applied: AppliedFilter, size: number) =>
    [...HelpQueryKeys.all, 'list', applied, size] as const,
  detail: (helpId: number) => [...HelpQueryKeys.all, 'detail', helpId] as const,
  historyList: (size: number) =>
    [...HelpQueryKeys.all, 'history-list', size] as const,
  historyApplicant: (helpHistoryId: number) =>
    [...HelpQueryKeys.all, 'history-applicant', helpHistoryId] as const,
  applyList: () => [...HelpQueryKeys.all, 'apply-list'] as const,
};
