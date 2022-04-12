export const getCurrentBoardId = (state) => state.selects.boardId;
export const getBoadrds = (state) => state.boards;
export const getBoard = (state) => {
  const id = getCurrentBoardId(state);
  return state.boards.find((board) => board.id === id);
};