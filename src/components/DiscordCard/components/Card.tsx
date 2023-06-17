import { HTMLMotionProps, motion } from 'framer-motion';
import Image from 'next/image';

export function Card({
    children,
    className,
    src,
    ...rest
}: HTMLMotionProps<'div'> & { src: string }) {
    return (
        <motion.div
            {...rest}
            className={`${className} flex h-fit items-start space-x-4 rounded-xl px-4`}
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
