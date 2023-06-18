'use client';

import Balancer from 'react-wrap-balancer';
import { motion } from 'framer-motion';
import { AnimateOpacityInView } from '@/components';

export function WelcomeText() {
    return (
        <div className="flex flex-col justify-center space-y-20 lg:h-full lg:flex-1">
            <div className="flex flex-col space-y-10">
                <AnimateOpacityInView>
                    <Balancer>
                        <h1 className="text-center text-6xl font-bold lg:text-left">
                            MidJourney: Ignite Your Creative Sparks with AI
                        </h1>
                    </Balancer>
                </AnimateOpacityInView>
                <AnimateOpacityInView>
                    <Balancer>
                        <motion.h3
                            initial={{
                                opacity: 0,
                                y: -20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.2,
                            }}
                            className="text-center text-white/90 lg:text-left"
                        >
                            MidJourney is an innovative AI-powered platform, breathing life into
                            textual prompts by converting them into captivating, high-quality
                            images. Empower your creative process with MidJourney, a tool designed
                            to imagine, inspire and illustrate, no matter if you&apos;re an artist,
                            designer, storyteller or a passionate dreamer.
                        </motion.h3>
                    </Balancer>
                </AnimateOpacityInView>
            </div>
            <AnimateOpacityInView
                transition={{
                    delay: 0.4,
                }}
            >
                <button className="h-10 w-fit rounded-md bg-gradient-to-tr from-purple-800 to-blue-800 px-4 font-semibold">
                    Get started
                </button>
            </AnimateOpacityInView>
        </div>
    );
}
