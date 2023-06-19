'use client';

import Balancer from 'react-wrap-balancer';
import { motion } from 'framer-motion';
import { AnimateWhileInView, Light } from '@/components';
import { Circles } from './Circles';
import { JoinButton } from './JoinButton';

export function WelcomeText() {
    return (
        <div className="flex flex-col items-center justify-center space-y-12 sm:space-y-24 lg:h-full lg:flex-1 lg:items-center lg:pb-20 lg:pt-5">
            <div className="flex flex-col items-end space-y-7 sm:space-y-12">
                <div>
                    <AnimateWhileInView variant="y">
                        <h1 className="text-center text-3xl font-bold sm:text-5xl lg:text-center lg:text-6xl">
                            <Balancer>MidJourney: Ignite Your Creative Sparks with AI</Balancer>
                        </h1>
                    </AnimateWhileInView>
                </div>
                <AnimateWhileInView
                    variant="y"
                    transition={{
                        delay: 0.2,
                    }}
                    className="text-center text-white/90 lg:text-center"
                >
                    <h3>
                        <Balancer>
                            MidJourney is an innovative AI-powered platform, breathing life into
                            textual prompts by converting them into captivating, high-quality
                            images. Empower your creative process with MidJourney, a tool designed
                            to imagine, inspire and illustrate, no matter if you&apos;re an artist,
                            designer, storyteller or a passionate dreamer.
                        </Balancer>
                    </h3>
                </AnimateWhileInView>
            </div>
            <div>
                <JoinButton />
                <AnimateWhileInView className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2">
                    <Circles />
                </AnimateWhileInView>
                <Light />
            </div>
        </div>
    );
}
