import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useDiscordCard } from '../useDiscordCard';
import { images } from '../images';

export function Prompt() {
    const { setState, setIteration } = useDiscordCard();

    return (
        <div className="flex flex-col space-y-2 text-sm">
            <p className="font-bold">/imagine</p>
            <div className="flex">
                <motion.div layout="size" className="flex rounded-l-sm bg-slate-700 px-1">
                    <p>prompt</p>
                </motion.div>
                <motion.div
                    layout="size"
                    className="flex h-fit items-center rounded-r-sm bg-slate-500 px-2"
                >
                    <p className="">
                        <TypeAnimation
                            sequence={images
                                .map((_, i) => [
                                    // Same substring at the start will only be typed once, initially
                                    images[i % images.length].prompt,
                                    () => {
                                        setState('prompt-typed');
                                        setIteration((old) => old + 1);
                                    },
                                    16000,
                                    '',
                                    () => setState('idle'),
                                ])
                                .reduce((acc, curr) => [...acc, ...curr], [])}
                            speed={60}
                            repeat={Infinity}
                        />
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
