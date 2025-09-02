import Image from 'next/image';

import { Text, TypographyType } from './text';

interface Props {
    size?: number;
    message: string;
    textSize?: TypographyType
}

function Empty({ size = 100, message, textSize = 'caption-2' }: Props) {
    return (
        <div className='flex flex-col items-center gap-2 justify-center text-gray-500'>

            <Image src='/images/smile.png' alt='empty' width={size} height={size} priority />
            <Text typography={textSize}>{message}</Text>
        </div>
    );
}

export { Empty };
