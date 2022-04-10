import { getCurrentBoard } from "../board/getCurrentBoard";

export function getNotes(state) {
    return getCurrentBoard(state).notes;
}