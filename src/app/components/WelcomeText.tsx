'use client';

import Balancer from 'react-wrap-balancer';
import { motion } from 'framer-motion';
import { AnimateOpacityInView } from '@/components';
import { Circles } from './Circles';

export function WelcomeText() {
    return (
        <div className="flex flex-col items-center justify-center space-y-20 lg:h-full lg:flex-1 lg:items-start">
            <div className="flex flex-col items-center space-y-10">
                <div>
                    <AnimateOpacityInView>
                        <Balancer>
                            <h1 className="text-center text-3xl font-bold sm:text-4xl lg:text-left lg:text-6xl">
                                MidJourney: Ignite Your Creative Sparks with AI
                            </h1>
                        </Balancer>
                    </AnimateOpacityInView>
                </div>
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
            <div>
                <AnimateOpacityInView
                    transition={{
                        delay: 0.4,
                    }}
                >
                    <button className="h-10 w-fit rounded-md bg-gradient-to-tr from-purple-800 to-blue-800 px-4 font-semibold">
                        Get started
                    </button>
                </AnimateOpacityInView>
                <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 lg:translate-x-0">
                    <Circles />
                </div>
            </div>
        </div>
    );
}
