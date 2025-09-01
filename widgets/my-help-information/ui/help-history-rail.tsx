'use client';

import { useEffect, useRef, useState } from 'react';

import { Rail, Text } from '@/shared/ui';
import { cn } from '@/shared/util';

export type Action = {
  id: string;
  label: string;
  onClick?: () => void;
};

type Props = {
  actions: Action[];
  overlap?: number;
  className?: string;
  defaultActiveId?: string;
};

function HelpHistoryRail({
  actions,
  overlap = 12,
  className,
  defaultActiveId,
}: Props) {

  const [activeId, setActiveId] = useState(
    defaultActiveId ?? actions[0]?.id ?? '',
  );


  const itemRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  const [indicator, setIndicator] = useState({ left: 0, width: 0 });


  useEffect(() => {
    const el = itemRefs.current[activeId];
    if (!el) {
      return;
    }


    const parent = el.parentElement?.parentElement;
    if (!parent) {
      return;
    }

    const parentRect = parent.getBoundingClientRect();
    const rect = el.getBoundingClientRect();

    setIndicator({
      left: rect.left - parentRect.left - 6,
      width: rect.width + 10,
    });
  }, [activeId, actions]);

  const handleClick = (a: Action) => {
    setActiveId(a.id);
    a.onClick?.();
  };

  const isActive = (id: string) => id === activeId;

  return (
    <div className={className}>

      <div className='flex gap-4 px-1.5' style={{ marginTop: `-${overlap}px` }}>
        {actions.map((a) => (
          <button
            key={a.id}
            type='button'
            onClick={() => handleClick(a)}
            className='relative  cursor-pointer'
          >
            <span
              ref={(node) => {
                itemRefs.current[a.id] = node;
              }}
              className='inline-block'
            >
              <Text
                as='span'
                typography='body-2'
                className={cn(
                  'text-gray-700',
                  isActive(a.id) && 'text-main-green-900 font-bold',
                )}
              >
                {a.label}
              </Text>
            </span>
          </button>
        ))}
      </div>


      <Rail indicatorLeft={indicator.left} indicatorWidth={indicator.width} />
    </div>
  );
}

export { HelpHistoryRail };
