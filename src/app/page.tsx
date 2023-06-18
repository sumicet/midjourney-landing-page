import { AnimateOpacityInView, DiscordCard } from '@/components';
import { WelcomeText } from './components';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex h-full max-h-[1000px] w-full flex-col items-center space-x-6">
            <div className="flex flex-1 flex-col space-y-20  lg:flex-row lg:space-y-0">
                <WelcomeText />
                <div className="flex w-full items-center justify-center lg:h-full lg:flex-1">
                    <DiscordCard />
                </div>
            </div>
            <div className="grid w-full grid-cols-3 gap-16">
                {['github', 'tesla', 'intel', 'amd', 'nasa', 'apple'].map((sponsor) => (
                    <AnimateOpacityInView
                        key={sponsor}
                        className="flex h-10 w-full"
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
        </main>
    );
}
