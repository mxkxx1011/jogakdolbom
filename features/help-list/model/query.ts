export const HelpQueryKeys = {
  all: ['helps'] as const,
  list: () => [...HelpQueryKeys.all, 'list'] as const,
};
