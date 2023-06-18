'use client';

import Balancer from 'react-wrap-balancer';
import { motion } from 'framer-motion';

export function WelcomeText() {
    return (
        <div className="flex flex-col justify-center space-y-40 lg:h-full lg:flex-1">
            <div className="flex flex-col space-y-10">
                <Balancer>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        className="text-center text-3xl font-bold lg:text-left"
                    >
                        MidJourney: Ignite Your Creative Sparks with AI
                    </motion.h1>
                </Balancer>
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
                        className="text-center lg:text-left"
                    >
                        Experience the power of artificial intelligence in transforming your ideas
                        into breathtaking visuals in real-time.
                    </motion.h3>
                </Balancer>
            </div>
            <button className="h-10 w-fit rounded-md bg-gradient-to-tr from-purple-700 to-blue-400 px-4 font-semibold">
                Get started
            </button>
        </div>
    );
}
