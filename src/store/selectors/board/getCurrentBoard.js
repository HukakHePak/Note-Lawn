import { getBoard, getCurrentBoardId } from "../existenceBoards";

export function getCurrentBoard(state) {
    return getBoard(state, getCurrentBoardId(state));
}