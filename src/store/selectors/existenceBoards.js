export const getCurrentBoardId = (state) => (state.existenceBoards.currentBoardId)
export const getBoadrds = (state) => (state.existenceBoards.boards)
export const getBoard = (state, id) => (state.existenceBoards.boards.find(board => board.id === id))
export const getFavoriteNotes = (state) => (state.existenceBoards.favoriteNotes)
