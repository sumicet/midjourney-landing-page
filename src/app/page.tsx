import { DiscordCard } from '@/components';
import { WelcomeText } from './components';

export default function Home() {
    return (
        <main className="flex h-full w-full flex-col items-center space-x-6 space-y-20 lg:flex-row lg:space-y-0">
            <WelcomeText />
            <div className="flex items-center justify-center lg:h-full lg:flex-1">
                <DiscordCard />
            </div>
        </main>
    );
}
