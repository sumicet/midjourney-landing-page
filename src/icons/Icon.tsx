import { ComponentProps } from 'react';
import { Logo } from './icons';

const icons = {
    logo: Logo,
} as const;

export function Icon({ type, ...rest }: { type: keyof typeof icons } & ComponentProps<'svg'>) {
    const Component = icons[type];

    return <Component {...rest} />;
}
