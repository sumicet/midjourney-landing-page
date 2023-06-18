import Image from 'next/image';
import { Card } from './Card';
import { BsCheckLg } from 'react-icons/bs';
import { AnimatePresence, HTMLMotionProps, LayoutGroup, motion } from 'framer-motion';
import { Options } from './Options';
import { Reaction } from './Reaction';
import { useDiscordCard } from '../useDiscordCard';
import { images } from '../images';

const delays = [0, 0.5, 1.2, 1.5];

export function MidjourneyCard({ children, ...rest }: HTMLMotionProps<'div'>) {
    const { state, setState, iteration } = useDiscordCard();

    return (
        <Card
            src="/discordProfile.webp"
            initial={false}
            animate={state !== 'idle' ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -20 }}
            transition={{
                delay: 0.2,
            }}
            {...rest}
        >
            <div className="flex w-full flex-col space-y-1">
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-semibold text-green-400">Midjourney Bot</p>
                    <div className="flex h-[15px] space-x-1 rounded-sm bg-[#5865f2] px-1 text-xs">
                        <BsCheckLg className="h-[15px] w-[15px]" />
                        <p>BOT</p>
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    <div className="flex w-full flex-col space-y-3">
                        {['idle', 'prompt-typed', 'color-option', 'show-options'].includes(
                            state
                        ) && (
                            <>
                                <motion.div
                                    key="original"
                                    initial={false}
                                    animate={
                                        ['prompt-typed', 'color-option', 'show-options'].includes(
                                            state
                                        )
                                            ? { opacity: 1, x: 0 }
                                            : { opacity: 0, x: -20 }
                                    }
                                    exit={{ opacity: 0, x: -20 }}
                                    onAnimationComplete={() => {
                                        if (state !== 'prompt-typed') return;
                                        setTimeout(() => setState('show-options'), 300);
                                        setTimeout(() => setState('color-option'), 1500);
                                    }}
                                    className="aspect-square w-full"
                                >
                                    <Image
                                        src={images[iteration % images.length]?.original}
                                        fill
                                        className="rounded-xl object-contain"
                                        alt="cyberpunk"
                                    />
                                </motion.div>
                                <Options />
                            </>
                        )}
                        {['show-upscale', 'show-reactions'].includes(state) && (
                            <>
                                <motion.div
                                    key="selected"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    onAnimationComplete={() => setState('show-reactions')}
                                    className="aspect-square w-full"
                                >
                                    <Image
                                        src={images[iteration % images.length]?.upscaled}
                                        fill
                                        className="rounded-xl object-contain"
                                        alt="cyberpunk"
                                    />
                                </motion.div>
                                {/* Set fixed height to avoid layout shifts */}
                                <div className="flex h-[71px] w-full">
                                    <div className="flex h-fit space-x-2">
                                        {images[iteration % images.length]?.reactions.map(
                                            ({ count, emoji }, index) => (
                                                <Reaction
                                                    key={emoji}
                                                    emoji={emoji}
                                                    count={count}
                                                    delay={delays[index]}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </AnimatePresence>
            </div>
        </Card>
    );
}
