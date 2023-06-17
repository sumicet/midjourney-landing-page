import Image from 'next/image';
import { Card } from './Card';
import { BsCheckLg } from 'react-icons/bs';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { Options } from './Options';
import { useState } from 'react';
import { Reaction } from './Reaction';

const reactions = [
    {
        count: 232,
        emoji: '❤️',
        delay: 0,
    },
    {
        count: 215,
        emoji: '🚀',
        delay: 0.5,
    },
    {
        count: 184,
        emoji: '💯',
        delay: 1.2,
    },
    {
        count: 150,
        emoji: '🔥',
        delay: 1.5,
    },
];

export function MidjourneyCard({
    children,
    selectedOption,
    setSelectedOption,
    isAnimate,
    ...rest
}: HTMLMotionProps<'div'> & {
    selectedOption: string | null;
    setSelectedOption: (option: string | null) => void;
    isAnimate: boolean;
}) {
    const [isUpscaledVisible, setIsUpscaledVisible] = useState(false);

    return (
        <Card
            src="/discordProfile.webp"
            initial={false}
            animate={isAnimate ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -20 }}
            transition={{
                delay: 0.2,
            }}
            {...rest}
        >
            <div className="flex flex-col space-y-3">
                <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                        <p className="text-sm font-semibold text-green-400">Midjourney Bot</p>
                        <div className="flex h-[15px] space-x-1 rounded-sm bg-[#5865f2] px-1 text-xs">
                            <BsCheckLg className="h-[15px] w-[15px]" />
                            <p>BOT</p>
                        </div>
                    </div>
                    <AnimatePresence mode="wait">
                        {!selectedOption && (
                            <motion.div
                                key="original"
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <Image
                                    src="/cyberpunk.png"
                                    width={350}
                                    height={350}
                                    className="rounded-xl object-contain outline outline-1 outline-white/[15%]"
                                    alt="cyberpunk"
                                />
                            </motion.div>
                        )}
                        {selectedOption && (
                            <motion.div
                                key="selected"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                onAnimationComplete={() => setIsUpscaledVisible(true)}
                            >
                                <Image
                                    src="/cyberpunkUpscaled.png"
                                    width={350}
                                    height={350}
                                    className="rounded-xl object-contain outline outline-1 outline-white/[15%]"
                                    alt="cyberpunk"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                {/* Set fixed height to avoid layout shifts */}
                <div className="flex h-[71px] w-full">
                    <AnimatePresence mode="wait">
                        {!selectedOption && (
                            <motion.div
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <Options
                                    selectedOption={selectedOption}
                                    setSelectedOption={setSelectedOption}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {isUpscaledVisible && (
                        <div className="flex h-fit space-x-2">
                            {selectedOption &&
                                reactions.map(({ count, emoji, delay }) => (
                                    <Reaction
                                        key={emoji}
                                        emoji={emoji}
                                        count={count}
                                        delay={delay}
                                    />
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
}
