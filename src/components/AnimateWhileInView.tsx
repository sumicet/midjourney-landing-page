'use client';

import { HTMLMotionProps, motion } from 'framer-motion';

export function AnimateWhileInView({
    variant,
    initial,
    whileInView,
    transition,
    ...rest
}: HTMLMotionProps<'div'> & { variant?: 'opacity' | 'x' | 'y' }) {
    const initialProps =
        variant === 'x'
            ? {
                  x: 20,
              }
            : variant === 'y'
            ? {
                  y: -20,
              }
            : {};

    const whileInViewProps =
        variant === 'x'
            ? {
                  x: 0,
              }
            : variant === 'y'
            ? {
                  y: 0,
              }
            : {};

    return (
        <motion.div
            {...rest}
            initial={{
                opacity: 0,
                ...initialProps,
                // @ts-ignore
                ...initial,
            }}
            whileInView={{
                opacity: 1,
                ...whileInViewProps,
                // @ts-ignore
                ...whileInView,
            }}
            viewport={{
                once: true,
            }}
            // @ts-ignore
            transition={{
                duration: 0.5,
                ...transition,
            }}
        />
    );
}
