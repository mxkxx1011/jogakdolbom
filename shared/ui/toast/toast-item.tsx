'use client';

import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { ComponentType, SVGProps, useEffect } from 'react';

import { IconCircleCheck, IconCircleInfo, IconCircleX } from '@/shared/asset';
import { cn } from '@/shared/util';

import { type Toast, useToastStore } from './use-toast-store';

const ToastVariants = cva(
  'w-100 px-6 py-3 rounded-full flex items-center gap-5',
  {
    variants: {
      type: {
        success: 'bg-main-green-700',
        error: 'bg-point-red',
        info: 'bg-point-blue',
        warning: 'bg-point-purple',
      },
    },
    defaultVariants: {},
  },
);

interface Props extends Toast {
  className?: string;
}

const IconType: Record<
  Toast['type'],
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  success: IconCircleCheck,
  error: IconCircleX,
  info: IconCircleInfo,
  warning: IconCircleInfo,
};

function ToastItem({ message, type, className, duration, id }: Props) {
  const { removeToast } = useToastStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, removeToast]);

  const Icon = IconType[type];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 1.02 }} // ← 사라질 때 애니메이션
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <div className={cn(ToastVariants({ type }), className)}>
        <Icon />
        <div>
          <p className='subtitle-3 text-gray-50'>{type}</p>
          <span className='body-1 text-gray-50'>{message}</span>
        </div>
      </div>
    </motion.div>
  );
}

export { ToastItem };
