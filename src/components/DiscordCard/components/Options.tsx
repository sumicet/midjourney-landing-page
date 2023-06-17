import { ComponentPropsWithoutRef } from 'react';

const upscales = ['U1', 'U2', 'U3', 'U4', '🔄'];
const variants = ['V1', 'V2', 'V3', 'V4'];

function Option({ children, className, ...rest }: ComponentPropsWithoutRef<'button'>) {
    return (
        <button
            {...rest}
            className={`${className} flex h-8 w-14 cursor-pointer items-center justify-center rounded-sm transition-colors`}
        >
            <p className="text-sm">{children}</p>
        </button>
    );
}

export function Options({
    selectedOption,
    setSelectedOption,
}: {
    selectedOption: string | null;
    setSelectedOption: (option: string | null) => void;
}) {
    return (
        <div className="flex flex-wrap space-y-2">
            {[upscales, variants].map((array, index) => (
                <div key={array[0]} className="flex flex-wrap space-x-2">
                    {array.map((text) => (
                        <Option
                            key={text}
                            className={
                                selectedOption === text
                                    ? 'bg-[#5865f2]'
                                    : 'bg-white/30 hover:bg-white/40'
                            }
                            onClick={() => setSelectedOption(text)}
                        >
                            {text}
                        </Option>
                    ))}
                </div>
            ))}
        </div>
    );
}
