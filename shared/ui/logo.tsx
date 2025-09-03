import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href='/' aria-label='로고-홈으로 이동'>
      <Image src='/images/logo_width.png' alt='로고' fill priority className='hidden md:block' />
      <Image src='/images/logo_only.png' alt='로고' width={28} height={28} priority className='block md:hidden' />
    </Link>
  );
}

export { Logo };
