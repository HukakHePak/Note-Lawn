export const ADD_BOARD = 'ADD_BOARD'
export const REMOVE_BOARD = 'REMOVE_BOARD'
export const SET_BOARD = 'SET_BOARD'
export const CHANGE_BOARD = 'CHANGE_BOARD'

export const setBoard = (boardId) => ({type: SET_BOARD, boardId})
export const addBoard = (name, color, background, isRepeat) => ({type: ADD_BOARD, name, color, background, isRepeat})
export const removeBoard = (id) => ({type: REMOVE_BOARD, id})
export const changeBoard = (id, name, color, background, isRepeat) => ({type: CHANGE_BOARD, id, name, color, background, isRepeat})
