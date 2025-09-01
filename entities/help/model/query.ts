export const HelpQueryKeys = {
  all: ['helps'] as const,
  list: () => [...HelpQueryKeys.all, 'list'] as const,
  detail: (helpId: number) => [...HelpQueryKeys.all, 'detail', helpId] as const,
  historyList: () => [...HelpQueryKeys.all, 'history-list'] as const,
  historyApplicant: (helpHistoryId: number) =>
    [...HelpQueryKeys.all, 'history-applicant', helpHistoryId] as const,
};
