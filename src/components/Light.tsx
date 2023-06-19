'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import { AnimateWhileInView } from './AnimateWhileInView';

export function Light({
    variant = 'medium',
    className,
    ...rest
}: { variant?: 'large' | 'medium' | 'small' } & HTMLMotionProps<'div'>) {
    return (
        <AnimateWhileInView
            {...rest}
            className={`absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center ${
                variant === 'small' ? 'h-[200px] w-[200px]' : 'h-[500px] w-[500px]'
            } ${className}`}
        >
            <div
                className={`h-full w-full bg-indigo-700/20 ${
                    variant === 'large'
                        ? 'blur-[200px]'
                        : variant === 'medium'
                        ? 'blur-[150px]'
                        : 'blur-[70px]'
                }`}
            />
        </AnimateWhileInView>
    );
}
