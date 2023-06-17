'use client';

import { useState } from 'react';
import { Card, MidjourneyCard, Options, Prompt } from './components';

export function DiscordCard() {
    const [isTyped, setIsTyped] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    return (
        <div className="flex flex-col space-y-5">
            <Card
                src="/discordProfileUser.webp"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
            >
                <div className="flex flex-col space-y-[1px]">
                    <p className="text-sm font-semibold">Marko</p>
                    <Prompt setIsTyped={setIsTyped} />
                </div>
            </Card>
            <MidjourneyCard
                isAnimate={isTyped}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />
        </div>
    );
}
