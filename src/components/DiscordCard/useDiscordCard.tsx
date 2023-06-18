import { useContext } from 'react';
import { Context } from './Context';

export function useDiscordCard() {
    return useContext(Context);
}
