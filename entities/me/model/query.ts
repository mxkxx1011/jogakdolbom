export const MyQueryKeys = {
  all: ['user'] as const,
  myInformation: () => [...MyQueryKeys.all, 'me'] as const,
} as const;
