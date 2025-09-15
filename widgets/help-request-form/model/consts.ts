import { type Path } from 'react-hook-form';

import { HelpRequest } from '@/entities/help';

type HelpFieldDef = {
  name: Path<HelpRequest>;
  placeholder: string;
  label: string;
};

export const HelpFields: HelpFieldDef[] = [
  {
    name: 'requestLocation',
    placeholder: '상세 주소를 입력해주세요.',
    label: '도움 받을 정확한 위치를 입력해주세요!',
  },
  {
    name: 'requestDetail',
    placeholder: '필요한 도움을 작성해주세요',
    label: '어떤 도움이 필요하신가요?',
  },
  {
    name: 'requestNote',
    placeholder: '예: 애가 낯을 가려요, 강아지를 무서워해요',
    label: '참고하면 좋을 내용이 있다면 작성해주세요!',
  },
];
