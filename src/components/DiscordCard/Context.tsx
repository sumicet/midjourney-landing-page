import { Dispatch, SetStateAction, createContext } from 'react';

export type State =
    | 'idle'
    | 'prompt-typed'
    | 'show-options'
    | 'color-option'
    | 'show-upscale'
    | 'show-reactions';

export const Context = createContext<{
    state: State;
    setState: Dispatch<SetStateAction<State>>;
    iteration: number;
    setIteration: Dispatch<SetStateAction<number>>;
}>({
    state: 'idle',
    setState: () => null,
    iteration: -1,
    setIteration: () => null,
});
