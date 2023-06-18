import NextLink from 'next/link';

type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

export function Link({
    variant = 'solid',
    className,
    ...rest
}: LinkProps & { variant?: 'solid' | 'ghost' }) {
    return (
        <NextLink
            {...rest}
            className={`${className} ${
                variant === 'solid'
                    ? 'text-white hover:text-white/90'
                    : 'text-white/80 hover:text-white/70'
            }`}
        />
    );
}
