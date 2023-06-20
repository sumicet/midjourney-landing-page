import { AnimateWhileInView } from '@/components';

function Code({ children }: { children: React.ReactNode }) {
    return <span className="font-mono font-semibold text-indigo-400">{children}</span>;
}

const cards = [
    {
        title: 'Default Model Version 5.1',
        description: [
            <>
                The Midjourney V5.1 model is the newest and most advanced, released on May 4th,
                2023. To use this model, add the <Code>--v 5.1</Code> parameter to the end of a
                prompt, or use the <Code>/settings</Code> command and select{' '}
                <Code>MJ Version 5.1</Code>.
            </>,
            <>
                This model has a stronger default aesthetic, making it easier to use with simple
                text prompts. It also has high Coherency, excels at accurately interpreting natural
                language prompts, produces fewer unwanted artifacts and borders, has increased image
                sharpness, and supports advanced features like repeating patterns with{' '}
                <Code>--tile</Code>
            </>,
        ],
    },
    {
        title: 'The Niji Model v5',
        description: [
            <>
                The Niji model is a collaboration between Midjourney and Spellbrush tuned to produce
                anime and illustrative styles with vastly more knowledge of anime, anime styles, and
                anime aesthetics. It&apos;s excellent at dynamic and action shots and
                character-focused compositions.
            </>,
            <>
                To use this model, add the <Code>--niji 5</Code> parameter to the end of a prompt,
                or use the <Code>/settings</Code> command and select <Code>Niji version 5</Code>.
            </>,
        ],
    },
];

export function Cards() {
    return (
        <div className="grid w-full grid-cols-1 gap-20 lg:grid-cols-2">
            {cards.map(({ title, description }) => (
                <AnimateWhileInView
                    variant="x"
                    key={title}
                    className="flex h-full flex-col space-y-12 text-center lg:text-start"
                >
                    <p className="text-xl font-semibold lg:text-2xl">{title}</p>
                    {description.map((desc, index) => (
                        <p key={index} className="text-white/80">
                            {desc}
                        </p>
                    ))}
                </AnimateWhileInView>
            ))}
        </div>
    );
}
