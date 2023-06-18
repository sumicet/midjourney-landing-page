'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const variants = {
    hidden: {
        width: '0%',
        height: '0%',
        opacity: 0,
    },
    pulse: (custom: { size: string; duration: number }) => ({
        width: ['0%', custom.size],
        height: ['0%', custom.size],
        opacity: [1, 1, 1, 0],
        transition: {
            repeat: Infinity,
            duration: custom.duration,
            repeatDelay: 2.4 - custom.duration,
        },
    }),
};

function Circle(props: HTMLMotionProps<'div'>) {
    return (
        <motion.div
            {...props}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/30 transition-colors duration-200 group-hover:bg-white/30"
            variants={variants}
        />
    );
}

const circles = [
    {
        size: '110%',
        duration: 2.4,
    },
    {
        size: '130%',
        duration: 2.2,
    },
    {
        size: '150%',
        duration: 2,
    },
    {
        size: '170%',
        duration: 1.8,
    },
];

export function JoinButton() {
    const [isHover, setIsHover] = useState(false);
    return (
        <Link href="https://discord.com/invite/midjourney">
            <motion.button
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="group group flex aspect-square w-fit items-center rounded-full bg-indigo-600 bg-gradient-to-tr px-4 text-sm font-semibold transition-colors duration-200 hover:bg-white hover:text-indigo-800"
            >
                {circles.map((custom) => (
                    <Circle
                        key={custom.size}
                        custom={custom}
                        animate={isHover ? 'hidden' : 'pulse'}
                    />
                ))}

                <p>JOIN</p>
            </motion.button>
        </Link>
    );
}
