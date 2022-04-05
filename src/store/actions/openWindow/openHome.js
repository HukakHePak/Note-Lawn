import { Action } from '../Action'

export const home = "OPEN_HOME";

export function openHome() {
    return Action(home, { home: true });
}