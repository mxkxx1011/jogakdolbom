import { HelpHistory } from '@/entities/help';
import { useHelpDetailQuery } from '@/features/help-detail/model';
import { InfoText } from '@/features/help-detail/ui';
import { IconDate, IconMap, IconTime } from '@/shared/asset';
import { ModalSection, ModalSectionTitle, Textarea } from '@/shared/ui';
import { formatDate, getGuDong, getTimeRange } from '@/shared/util';

function HelpHistoryModalDetail({ helpHistory }: { helpHistory: HelpHistory }) {
  const { data } = useHelpDetailQuery(helpHistory.id);
  if (!data) {
    return null;
  }
  return (
    <div>
      <div className='flex flex-col gap-0.5 mt-3 mb-6'>
        <InfoText
          icon={<IconMap width={18} height={18} />}
          color='green'
          textSize='body-4'
        >
          {getGuDong({ onlyDong: true, address: data.addressText })}
        </InfoText>
        <InfoText
          icon={<IconDate width={18} height={18} />}
          color='green'
          textSize='body-4'
        >
          {formatDate(data.serviceDate)}
        </InfoText>
        <InfoText
          icon={<IconTime width={18} height={18} />}
          color='green'
          textSize='body-4'
        >
          {getTimeRange(data.startTime, data.endTime)}
        </InfoText>
      </div>
      <div className='flex flex-col gap-5 mb-8'>
        <ModalSection className='gap-1'>
          <ModalSectionTitle>상세 위치</ModalSectionTitle>
          <Textarea
            value={data.requestLocation}
            readOnly
            className='w-full h-fit'
          />
        </ModalSection>
        <ModalSection className='gap-1'>
          <ModalSectionTitle>상세 내용</ModalSectionTitle>
          <Textarea
            value={data.requestDetail}
            readOnly
            className='w-full h-fit'
          />
        </ModalSection>
        {data.requestNote && (
          <ModalSection className='gap-1'>
            <ModalSectionTitle>참고 사항</ModalSectionTitle>
            <Textarea
              value={data.requestNote}
              readOnly
              className='w-full h-fit'
            />
          </ModalSection>
        )}
      </div>
    </div>
  );
}

export { HelpHistoryModalDetail };
