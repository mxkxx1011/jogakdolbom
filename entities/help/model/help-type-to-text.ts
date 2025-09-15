import { HelpTextType, HelpType } from '@/entities/help/model/types';

const helpTypeTextMap: Record<HelpType, HelpTextType> = {
  1: '등/하원 돌봄',
  2: '놀이 돌봄',
  3: '동행 돌봄',
  4: '기타 돌봄',
};

function HelpTypeToText(helpType: HelpType): HelpTextType {
  return helpTypeTextMap[helpType];
}

export { HelpTypeToText };
