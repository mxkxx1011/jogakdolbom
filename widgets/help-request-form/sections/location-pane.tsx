import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { useUserStore } from '@/entities/user/model';
import { useLocationStore } from '@/features/map/model';
import { MapPickerModal } from '@/features/map/ui';
import { IconMap, IconPuzzle } from '@/shared/asset';
import { Divider, Text, useModalStore } from '@/shared/ui';

function LocationPane() {
  const { regionLabel } = useLocationStore();
  const { openModal } = useModalStore();
  const { user } = useUserStore();

  const { setValue, trigger } = useFormContext();

  useEffect(() => {
    if (!regionLabel) {
      return;
    }
    setValue('addressText', regionLabel, {
      shouldDirty: true,
      shouldValidate: true,
    });

    trigger('addressText');
  }, [regionLabel, setValue, trigger]);

  return (
    <div className='w-84'>
      <div className='py-12 px-6 flex flex-col justify-between h-full'>
        <div>
          <div className='flex flex-col gap-2.5 pl-6'>
            <Text typography='subtitle-1'>{user?.nickname}</Text>
            <button
              type='button'
              onClick={() => openModal(<MapPickerModal />)}
              className='flex items-center gap-1.5 body-0 text-gray-700'
            >
              <IconMap width={24} height={24} />{' '}
              {regionLabel ? regionLabel : '위치를 선택해주세요'}
            </button>
          </div>
          <Divider className='my-6' />
        </div>

        <div className='flex flex-col gap-2.5 pl-6'>
          <Text typography='body-0' className='flex items-center gap-1'>
            <IconPuzzle /> 조각이란?
          </Text>
          <Text typography='body-3' className='text-gray-700'>
            돌봄 요청 시, 10분에 1조각이 소모됩니다.
            <br />
            돌봄에 참여하면 조각을 얻을 수 있어요!
          </Text>
        </div>
      </div>
    </div>
  );
}

export { LocationPane };
