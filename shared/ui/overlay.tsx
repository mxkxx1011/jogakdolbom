import { useEscapeKeydown } from '../hook';

function Overlay({ onClose }: { onClose: () => void }) {
  useEscapeKeydown(onClose);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={onClose}
      role='button'
      tabIndex={0}
      className='fixed w-full h-full z-overlay inset-0 bg-black/50 cursor-pointer'
    />
  );
}

export { Overlay };
