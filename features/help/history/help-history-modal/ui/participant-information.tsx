import { HelperReviewInfo, HelpHistory } from '@/entities/help';
import { Label, Profile, Text, Textarea } from '@/shared/ui';

function ParticipantInformation({ helpHistory }: { helpHistory: HelpHistory }) {
  const { assignedHelper } = helpHistory;

  const { nickname, imageUrl, reviewCount, avgRating, message } =
    assignedHelper!;

  return (
    <div className='mt-2 mb-6 space-y-5'>
      <div className='space-y-2'>
        <Text typography='subtitle-3' className='text-main-green-800'>
          참여자 정보
        </Text>
        <Profile
          name={nickname}
          imageUrl={imageUrl}
          bottomItem={
            <div>
              <HelperReviewInfo
                reviewCount={reviewCount}
                avgRating={avgRating}
              />
            </div>
          }
        />
      </div>

      <div className='flex flex-col gap-2.5'>
        <Label htmlFor='message' className='text-main-green-800'>
          이런 도움을 드릴 수 있어요
        </Label>
        <Textarea
          id='message'
          defaultValue={message}
          readOnly
          spellCheck={false}
        />
      </div>
    </div>
  );
}

export { ParticipantInformation };
