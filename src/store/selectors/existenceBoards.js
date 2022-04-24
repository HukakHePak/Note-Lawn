export const getCurrentBoardId = (state) => state.selects.boardId;
export const getBoards = (state) => state.boards;

export function getBoard(id) {
  return (state) => {
    return getBoards(state).find((board) => board.id === id);
  };
}
