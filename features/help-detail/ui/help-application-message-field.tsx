import { Controller, useFormContext } from 'react-hook-form';

import { Textarea } from '@/shared/ui';

function HelpApplicationMessageField() {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name='message'
      render={({ field }) => (
        <Textarea
          placeholder='돌봄 요청자분에게 전할 말과 해줄 수 있는 도움을 간단히 작성해주세요!'
          className='h-30'
          {...field}
        />
      )}
    />
  );
}

export { HelpApplicationMessageField };
