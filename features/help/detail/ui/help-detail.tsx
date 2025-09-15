import { type HelpDetail } from '@/entities/help';
import { IconDate, IconMap, IconTime } from '@/shared/asset';
import { Text } from '@/shared/ui';
import { formatDate, formatRelativeTime, getGuDong, hhmm } from '@/shared/util';

import { HelpApplicationButton } from './help-application-button';
import { HelpDetailDescription } from './help-detail-description';
import { InfoText } from './info-text';

function HelpDetail({ helpDetail }: { helpDetail: HelpDetail }) {
  const {
    helpTypeText,
    createdAt,
    addressText,
    serviceDate,
    startTime,
    endTime,
    requestLocation,
    requestDetail,
    requestNote,
  } = helpDetail;

  return (
    <section className='flex flex-col gap-7.5 w-1/2'>
      <div className='flex flex-col gap-1.5'>
        <Text typography='headline-2' className='text-main-green-800'>
          {helpTypeText}
        </Text>
        <Text className='text-gray-600' typography='caption-2'>
          {formatRelativeTime(createdAt)}
        </Text>
      </div>
      <div className='flex flex-col gap-2.5'>
        <InfoText icon={<IconMap />}>
          {getGuDong({ address: addressText })}
        </InfoText>
        <InfoText icon={<IconDate />}>{formatDate(serviceDate)}</InfoText>
        <InfoText
          icon={<IconTime />}
        >{`${hhmm(startTime)} - ${hhmm(endTime)}`}</InfoText>
      </div>

      <HelpDetailDescription title='상세 위치'>
        {requestLocation}
      </HelpDetailDescription>
      <HelpDetailDescription title='상세 내용'>
        {requestDetail}
      </HelpDetailDescription>
      <HelpDetailDescription title='참고사항'>
        {requestNote}
      </HelpDetailDescription>
      <HelpApplicationButton helpDetail={helpDetail} />
    </section>
  );
}

export { HelpDetail };
