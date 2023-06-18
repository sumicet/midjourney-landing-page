'use client';

import { motion } from 'framer-motion';

export function Light({ variant = 'medium' }: { variant?: 'large' | 'medium' }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute left-1/2 top-1/2 -z-10 flex h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        >
            <div
                className={`h-full w-full bg-indigo-700/20 ${
                    variant === 'large' ? 'blur-[200px]' : 'blur-[150px]'
                }`}
            />
        </motion.div>
    );
}
