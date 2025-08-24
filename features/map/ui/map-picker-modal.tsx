import {
  Button,
  ModalButtons,
  ModalCloseWrapper,
  ModalDescription,
  ModalTitle,
  useModalStore,
} from '@/shared/ui';

import { useLocationStore } from '../model';

import { MapPicker } from './map-picker';
import { MyNeighborhood } from './my-neighborhood';

function MapPickerModal() {
  const { closeModal } = useModalStore();
  const { regionLabel } = useLocationStore();

  return (
    <ModalCloseWrapper>
      <ModalTitle>위치 선택하기</ModalTitle>
      <ModalDescription>돌봄을 받을 위치를 선택해주세요.</ModalDescription>
      <MapPicker />
      <div className='mt-4'>
        <MyNeighborhood />
      </div>
      <ModalButtons className='mt-4'>
        <Button className='flex-1' disabled={!regionLabel} onClick={closeModal}>
          선택
        </Button>
      </ModalButtons>
    </ModalCloseWrapper>
  );
}

export { MapPickerModal };
