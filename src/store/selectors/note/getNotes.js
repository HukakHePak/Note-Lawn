import { getCurrentBoardId } from "../existenceBoards";

export function getNotes(state) {
    return state.notes.filter(({boardId}) => boardId === getCurrentBoardId(state));
}