import { useCountUp } from 'use-count-up';
import { motion } from 'framer-motion';
import { useDiscordCard } from '../useDiscordCard';

export function Reaction({ count, emoji, delay }: { count: number; emoji: string; delay: number }) {
    const { value } = useCountUp({
        start: 1,
        isCounting: true,
        duration: 12,
        end: count,
        easing: 'easeInCubic',
        thousandsSeparator: ',',
    });

    const { state } = useDiscordCard();

    return (
        <motion.div
            initial={false}
            animate={state === 'show-reactions' ? { opacity: 1 } : { opacity: 0 }}
            transition={{
                delay,
            }}
            className="flex w-fit cursor-pointer items-center space-x-1 rounded-md bg-slate-600 px-2"
        >
            <div className="h-6">{emoji}</div>
            <p className="text-sm">{value}</p>
        </motion.div>
    );
}
