'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { cn } from '@/shared/util';

const skeletonVariants = cva(
    'relative overflow-hidden bg-gray-200 rounded-md',
    {
        variants: {
            shape: {
                rect: 'rounded-md',
                pill: 'rounded-full',
                circle: 'rounded-full',
            },
            animate: {
                shimmer:
                    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.6s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent',
                none: '',
            },
        },
        defaultVariants: {
            shape: 'rect',
            animate: 'shimmer',
        },
    },
);

// tailwind keyframes가 없다면 globals.css에 다음 추가
// @keyframes shimmer { 100% { transform: translateX(100%);} }

type Props = HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof skeletonVariants> & {
        asChild?: boolean;
    };

export function Skeleton({ className, shape, animate, ...rest }: Props) {
    return <div className={cn(skeletonVariants({ shape, animate }), className)} {...rest} />;
}
