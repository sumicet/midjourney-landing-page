'use client';

import { HTMLMotionProps, motion } from 'framer-motion';

export function AnimateOpacityInView(props: HTMLMotionProps<'div'>) {
    return (
        <motion.div
            {...props}
            initial={{
                opacity: 0,
                y: -20,
                // @ts-ignore
                ...props?.initial,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                // @ts-ignore
                ...props?.whileInView,
            }}
        />
    );
}
