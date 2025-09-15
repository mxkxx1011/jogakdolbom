import { Text } from '@/shared/ui';

function HelperReviewInfo({
  reviewCount,
  avgRating,
}: {
  reviewCount: number;
  avgRating: number;
}) {
  return (
    <Text typography='caption-2' className='text-gray-700'>
      돌봄 {reviewCount}회 · ★ {avgRating}점
    </Text>
  );
}

export { HelperReviewInfo };
