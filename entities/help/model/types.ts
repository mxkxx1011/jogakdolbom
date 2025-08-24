import { z } from 'zod';

// export const HelpRequestSchema = z.object({
//   helpType: z.number().min(1).max(4),
//   serviceDate: z.string().min(1, { message: '서비스 날짜를 선택해주세요.' }),
//   startTime: z.string().min(1, { message: '시작 시간을 선택해주세요.' }),
//   endTime: z.string().min(1, { message: '종료 시간을 선택해주세요.' }),
//   addressText: z.string().min(1, { message: '상세 주소를 선택해주세요.' }),
//   requestLocation: z
//     .string()
//     .min(1, { message: '서비스 위치를 입력해주세요.' }),
//   requestDetail: z
//     .string()
//     .min(1, { message: '필요한 도움에 대한 상세 내용을 입력해주세요.' }),
//   requestNote: z.string().optional(),
//   image: z.instanceof(File).optional(),
// });

export const HelpRequestSchema = z.object({
  helpType: z.enum(['1', '2', '3', '4']),
  serviceDate: z.string().min(1, { message: '서비스 날짜를 선택해주세요.' }),
  addressText: z.string().min(1, { message: '상세 주소를 선택해주세요.' }),
  // startTime: z.string().min(1, { message: '시작 시간을 선택해주세요.' }),
  // endTime: z.string().min(1, { message: '종료 시간을 선택해주세요.' }),
  requestLocation: z
    .string()
    .min(1, { message: '서비스 위치를 입력해주세요.' }),
  requestDetail: z
    .string()
    .min(1, { message: '필요한 도움에 대한 상세 내용을 입력해주세요.' }),
  requestNote: z.string().optional(),
});

export type HelpRequest = z.infer<typeof HelpRequestSchema>;

// export interface HelpRequest {
//   helpType: 1 | 2 | 3 | 4;
//   serviceDate: string;
//   startTime: string;
//   endTime: string;
//   addressText: string;
//   requestLocation: string;
//   requestDetail: string;
//   requestNote: string;
//   image: string | null;
// }
