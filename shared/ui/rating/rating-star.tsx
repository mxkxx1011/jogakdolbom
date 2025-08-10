import { IconStarEmpty, IconStarFill } from '@/shared/asset';

import { useRatingContext } from './rating-context';

interface StarProps {
  index: number;
}

function RatingStar({ index }: StarProps) {
  const { rate, onChangeRate } = useRatingContext();

  const isFilled = index <= rate;

  const handleClick = () => {
    onChangeRate(index);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={`별점 ${index}점`}
      className='cursor-pointer'
    >
      {isFilled ? <IconStarFill /> : <IconStarEmpty />}
    </button>
  );
}

export { RatingStar };
