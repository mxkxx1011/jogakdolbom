import Image from 'next/image';

function Profile({
  imageUrl,
  size = 44,
}: {
  imageUrl: string | null;
  size?: number;
}) {
  if (!imageUrl) {
    return (
      <Image
        src='/images/user_profile_circle.png'
        alt='profile'
        width={size}
        height={size}
        className='rounded-full'
      />
    );
  }
  return (
    <Image
      src={imageUrl}
      alt='profile'
      width={size}
      height={size}
      className='rounded-full'
    />
  );
}

export { Profile };
