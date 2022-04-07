import { Action } from '../Action'

export const editor = "OPEN_EDITOR";

export function openEditor() {
    return Action(editor, { editor: true });
}