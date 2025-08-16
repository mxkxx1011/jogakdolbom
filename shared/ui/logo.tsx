import Image from 'next/image';
import Link from 'next/link';

function Logo({
  width = 130,
  height = 100,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Link href='/' aria-label='로고-홈으로 이동'>
      <Image
        src='/images/logo_width.png'
        alt='로고'
        width={width}
        height={height}
      />
    </Link>
  );
}

export { Logo };
