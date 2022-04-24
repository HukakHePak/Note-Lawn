import { getCurrentBoardId } from "../existenceBoards";
import { getNotesOf } from "./getNotesOf";

export function getNotes(state) {
    return getNotesOf(getCurrentBoardId(state))(state);
}