import { getCurrentBoard } from "./getCurrentBoard";

export function getBoardPosition(state) {
    return getCurrentBoard(state).position;
}