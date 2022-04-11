export const getCurrentBoardId = (state) => (state.selects.boardId)
export const getBoadrds = (state) => (state.existenceBoards.boards)
export const getBoard = (state, id) => (state.boards.find(board => board.id === id))
export const getFavoriteNotes = (state) => (state.existenceBoards.favoriteNotes)
