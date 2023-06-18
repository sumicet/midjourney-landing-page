import { ComponentPropsWithoutRef } from 'react';
import { useDiscordCard } from '../useDiscordCard';
import { motion } from 'framer-motion';
import { images } from '../images';

const upscales = ['U1', 'U2', 'U3', 'U4', '🔄'];
const variants = ['V1', 'V2', 'V3', 'V4'];

function Option({ children, className, ...rest }: ComponentPropsWithoutRef<'button'>) {
    return (
        <button
            {...rest}
            className={`${className} flex h-8 w-14 cursor-pointer items-center justify-center rounded-sm transition-colors`}
        >
            <p className="text-sm">{children}</p>
        </button>
    );
}

export function Options() {
    const { state, setState, iteration } = useDiscordCard();

    return (
        <motion.div
            initial={false}
            animate={
                ['color-option', 'show-options'].includes(state)
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: -20 }
            }
            className="flex flex-wrap space-y-2"
        >
            {[upscales, variants].map((array) => (
                <div key={array[0]} className="flex flex-wrap space-x-2">
                    {array.map((text) => (
                        <Option
                            key={text}
                            className={
                                ['color-option', 'show-upscale'].includes(state) &&
                                text === images[iteration % images.length].upscale
                                    ? 'bg-[#5865f2]'
                                    : 'bg-white/30 hover:bg-white/40'
                            }
                            onTransitionEnd={() => {
                                setTimeout(() => setState('show-upscale'), 1000);
                            }}
                        >
                            {text}
                        </Option>
                    ))}
                </div>
            ))}
        </motion.div>
    );
}
