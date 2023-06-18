import { AnimateOpacityInView, DiscordCard } from '@/components';
import { Plans, WelcomeText } from './components';
import Image from 'next/image';
import { Balancer } from 'react-wrap-balancer';

export default function Home() {
    return (
        <main className="flex w-full flex-col space-y-32">
            <div className="flex h-full w-full flex-col items-center space-y-20 lg:max-h-[1000px] lg:space-x-6">
                <div className="flex flex-1 flex-col space-y-12 sm:space-y-20 lg:flex-row lg:space-y-0">
                    <WelcomeText />
                    <div className="flex w-full -translate-x-[28px] items-center justify-center lg:h-full lg:flex-1 lg:translate-x-0">
                        <DiscordCard />
                    </div>
                </div>
                <div className="grid w-full grid-cols-2 gap-16 lg:grid-cols-3">
                    {['github', 'tesla', 'intel', 'amd', 'nasa', 'apple'].map((sponsor) => (
                        <AnimateOpacityInView
                            key={sponsor}
                            className="flex h-7 w-full md:h-8"
                            transition={{
                                delay: 0.4,
                            }}
                        >
                            <Image
                                src={`/${sponsor}.png`}
                                fill
                                alt="sponsor"
                                className="object-contain opacity-80 invert"
                            />
                        </AnimateOpacityInView>
                    ))}
                </div>
            </div>
            <AnimateOpacityInView
                transition={{
                    delay: 0.4,
                }}
            >
                <div className="flex w-full flex-col space-y-12">
                    <h1 className="text-center text-2xl font-semibold sm:text-3xl lg:text-center lg:text-4xl">
                        <Balancer>Get Started With MidJourney</Balancer>
                    </h1>
                    <Plans />
                </div>
            </AnimateOpacityInView>
        </main>
    );
}
