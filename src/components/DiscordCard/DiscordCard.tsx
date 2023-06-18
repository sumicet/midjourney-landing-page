'use client';

import { useMemo, useState } from 'react';
import { Card, MidjourneyCard, Prompt } from './components';
import { Context, State } from './Context';

export function DiscordCard() {
    const [state, setState] = useState<State>('idle');
    const [iteration, setIteration] = useState(-1);

    const value = useMemo(() => ({ state, setIteration, iteration, setState }), [iteration, state]);

    return (
        <Context.Provider value={value}>
            <div className="flex w-full max-w-[422px] flex-col space-y-5">
                <Card
                    src="/discordProfileUser.webp"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                >
                    <div className="flex flex-col space-y-[1px]">
                        <p className="text-sm font-semibold">Marko</p>
                        <Prompt />
                    </div>
                </Card>
                <MidjourneyCard />
            </div>
        </Context.Provider>
    );
}
