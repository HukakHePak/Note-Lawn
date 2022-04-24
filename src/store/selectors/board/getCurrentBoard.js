import { getBoard, getCurrentBoardId } from "../existenceBoards";

export function getCurrentBoard(state) {
    return getBoard(getCurrentBoardId(state))(state);
}