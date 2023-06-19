'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

export function Stars() {
    const { scrollYProgress } = useScroll();
    const top = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const smoothTop = useSpring(top, {
        stiffness: 1000,
        damping: 100,
        duration: 0.5,
        mass: 1,
        bounce: 0,
    });

    return (
        <motion.div
            className="fixed left-1/2 h-[1400px] w-[1400px] -translate-x-1/2 opacity-50"
            style={{
                top: smoothTop,
            }}
        >
            <Image
                src="/stars.png"
                fill
                alt="stars"
                quality={100}
                priority={true}
                className="h-full w-full object-cover"
            />
            <Image
                src="/stars.png"
                fill
                alt="stars"
                quality={100}
                priority={true}
                className="h-full w-full object-cover"
            />
        </motion.div>
    );
}
