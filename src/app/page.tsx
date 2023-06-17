import { DiscordCard } from '@/components';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex h-full w-full flex-row items-center justify-between space-x-4">
            <div className="flex h-full flex-1 bg-slate-600" />
            <div className="flex h-full flex-1 items-center">
                <DiscordCard />
            </div>
        </main>
    );
}
