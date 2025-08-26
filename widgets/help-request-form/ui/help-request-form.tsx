import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { HelpRequest, HelpRequestSchema } from '@/entities/help/model/types';
import { SelectHelpType } from '@/features/select-help-type/ui';
import { Button, Form } from '@/shared/ui';

import { HelpFields } from '../model/consts';
import { useHelpMutation } from '../model/use-help-mutation';
import { HelpInputField, ScheduleSection } from '../sections';

function HelpRequestForm() {
  const methods = useForm<HelpRequest>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(HelpRequestSchema),
    defaultValues: {
      helpType: '1',
      serviceDate: '',
      startTime: '',
      endTime: '',
      addressText: '',
      requestLocation: '',
      requestDetail: '',
      requestNote: '',
    },
  });

  const { mutate: postHelp } = useHelpMutation();

  const onSubmit = (data: HelpRequest) => {
    postHelp(data);
  };

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-12'>
          <SelectHelpType />
          <ScheduleSection />
        </div>
        <div className='px-40 flex flex-col gap-10 mt-16'>
          {HelpFields.map((field) => (
            <HelpInputField key={field.name} {...field} />
          ))}
          <div className='flex items-center justify-end'>
            <Button type='submit' disabled={!methods.formState.isValid}>
              돌봄 요청하기
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export { HelpRequestForm };
