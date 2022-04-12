import { Action } from "../Action";

export const CREATE_NOTE = 'createNote';

export function createNote(type) {
    return Action(CREATE_NOTE, { type });
}