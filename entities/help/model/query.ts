import { AppliedFilter } from './types';

export const HelpQueryKeys = {
  all: ['helps'] as const,
  list: (applied: AppliedFilter) =>
    [...HelpQueryKeys.all, 'list', applied] as const,
  detail: (helpId: number) => [...HelpQueryKeys.all, 'detail', helpId] as const,
  historyList: () => [...HelpQueryKeys.all, 'history-list'] as const,
  historyApplicant: (helpHistoryId: number) =>
    [...HelpQueryKeys.all, 'history-applicant', helpHistoryId] as const,
  applyList: () => [...HelpQueryKeys.all, 'apply-list'] as const,
};
