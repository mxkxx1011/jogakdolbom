import {
  HelperReviewInfo,
  HelpHistory,
  HelpStatusBadge,
} from '@/entities/help';
import { DDayBadge, Profile, ProfileImageList, Text } from '@/shared/ui';
import { cn, formatDate, getTimeRange } from '@/shared/util';

interface Props {
  helpHistory: HelpHistory;
  onClick: () => void;
}

function HelpHistoryItem({ helpHistory, onClick }: Props) {
  const {
    serviceDate,
    startTime,
    endTime,
    helpTypeText,
    status,
    applicants,
    assignedHelper,
  } = helpHistory;
  return (
    <div
      onClick={onClick}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick();
        }
      }}
      className={cn(
        'flex items-center justify-between',
        'bg-white rounded-xl border border-gray-200',
        'px-20 py-7.5',
      )}
    >
      <DDayBadge date={serviceDate} />
      <div className='flex flex-col gap-1 w-1/2'>
        <Text typography='body-0'>{helpTypeText}</Text>
        <Text typography='caption-1' className='text-gray-700'>
          {formatDate(serviceDate)} {getTimeRange(startTime, endTime)}
        </Text>
        {status === 0 && applicants && (
          <ProfileImageList userList={applicants} />
        )}
        {status === 1 && (
          <Profile
            name={assignedHelper.nickname}
            imageUrl={assignedHelper.imageUrl}
            bottomItem={
              <HelperReviewInfo
                reviewCount={assignedHelper.reviewCount}
                avgRating={assignedHelper.avgRating}
              />
            }
          />
        )}
      </div>
      <HelpStatusBadge status={status} />
    </div>
  );
}

export { HelpHistoryItem };
