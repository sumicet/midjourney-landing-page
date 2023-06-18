import { HTMLMotionProps, motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

export function Card({
    children,
    className,
    src,
    ...rest
}: HTMLMotionProps<'div'> & { src: string; children: ReactNode }) {
    return (
        <motion.div
            {...rest}
            className={`${className} flex h-fit w-full items-start space-x-4 rounded-xl`}
        >
            <Image
                src={src}
                width={40}
                height={40}
                className="rounded-full object-contain"
                alt="discord profile"
            />
            {children}
        </motion.div>
    );
}
