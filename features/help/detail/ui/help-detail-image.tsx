import Image from 'next/image';

function HelpDetailImage({ imageUrl }: { imageUrl: string | null }) {
  if (!imageUrl) {
    return (
      <div className='flex items-center justify-center size-150 bg-main-green-50 rounded-lg border border-main-green-200'>
        <Image
          src='/images/smile-green.png'
          priority
          alt='돌봄요청사진'
          width={330}
          height={350}
        />
      </div>
    );
  }
  return (
    <Image
      className='flex items-center justify-center bg-main-green-50 rounded-lg border border-main-green-200'
      src={imageUrl}
      priority
      alt='돌봄요청사진'
      width={600}
      height={600}
    />
  );
}

export { HelpDetailImage };
