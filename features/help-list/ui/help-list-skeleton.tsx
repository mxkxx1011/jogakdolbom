/* eslint-disable react/no-array-index-key */
'use client';

import { HelpItemSkeleton } from './help-skeleton-item';

interface Props {
    count?: number;
}

function HelpListSkeleton({ count = 10 }: Props) {

    return (
        <div className='w-3/4' role='status' aria-label='도움 목록 불러오는 중'>
            {Array.from({ length: count }).map((_, idx) => (
                <HelpItemSkeleton
                    key={idx}
                    colorType={idx % 2 === 0 ? 'white' : 'gray'}
                />
            ))}
        </div>
    );
}

export { HelpListSkeleton };
