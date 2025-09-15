import {
  HelpApplicantDetail,
  HelperReviewInfo,
  HelpStatusBadge,
  HelpTypeToText,
} from '@/entities/help';
import { DDayBadge, Profile, Text } from '@/shared/ui';
import { cn, formatDate, getTimeRange } from '@/shared/util';

function MyHelpApplyItem({ applicant }: { applicant: HelpApplicantDetail }) {
  const { help } = applicant;
  const { requester, serviceDate, helpType, startTime, endTime } = help;
  const { nickname, profileImageUrl, ratingAvg, reviewCount } = requester;

  return (
    <div
      role='button'
      tabIndex={0}
      className={cn(
        'flex items-center justify-between',
        'bg-white rounded-xl border border-gray-200',
        'px-20 py-7.5',
      )}
    >
      <DDayBadge date={serviceDate} />

      <div className='flex flex-col gap-1 w-1/2'>
        <Text typography='body-0'>{HelpTypeToText(helpType)}</Text>
        <Text typography='caption-1' className='text-gray-700'>
          {formatDate(serviceDate)} {getTimeRange(startTime, endTime)}
        </Text>

        <Profile
          size={40}
          name={nickname}
          imageUrl={profileImageUrl}
          bottomItem={
            <HelperReviewInfo avgRating={ratingAvg} reviewCount={reviewCount} />
          }
        />
      </div>

      <HelpStatusBadge status={1} />
    </div>
  );
}

export { MyHelpApplyItem };
