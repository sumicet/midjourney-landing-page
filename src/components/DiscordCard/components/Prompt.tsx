import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export function Prompt({ setIsTyped }: { setIsTyped: (isTyped: boolean) => void }) {
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
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'cyberpunk style german shepherd dog',
                                () => setIsTyped(true),
                            ]}
                            speed={60}
                        />
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
