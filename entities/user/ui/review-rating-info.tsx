import { Text, type TypographyType } from '@/shared/ui';
import { cn } from '@/shared/util';

interface Props {
    reviewCount: number;
    avgRating: number;
    textSize?: TypographyType
    className?: string
}

function ReviewRatingInfo({ reviewCount, avgRating, textSize = 'caption-2', className }: Props) {
    return (
        <Text as='span' typography={textSize} className={cn('text-gray-700', className)}>
            리뷰 {reviewCount}개 · ★ {avgRating}점
        </Text>
    );
}

export { ReviewRatingInfo };
