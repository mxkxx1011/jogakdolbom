import { cn } from '../util';

function Divider({
  isVertical,
  className,
}: {
  isVertical?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'bg-gray-300',
        'w-full h-[1px]',
        isVertical && 'h-full w-[1px]',
        className,
      )}
    />
  );
}

export { Divider };
