import { ADD_BOARD, CHANGE_BOARD, REMOVE_BOARD } from "../actions/existenceBoards"
import { SET_BOARD } from './../actions/existenceBoards';
import { getCreatedDate } from './../../tools/time.js'

const defaultState = {
  currentBoardId: null,
  currentNoteId: null,
  boards: [
    { id: 1, name: 'Board 1', date: "08/03/2022 09:55", notes: [], color: '#98FB98' },
    { id: 2, name: 'Board 2', date: "08/03/2022 09:55", notes: [], color: '#F08080' },
    { id: 3, name: 'Board 3', date: "08/03/2022 09:55", notes: [], color: '#7FFFD4' },
  ],
  favoriteNotes: ["First", "Second", "Thirt"],
}

export const existenceBoards = (state = defaultState, action) => {
  switch (action.type) {
    case SET_BOARD:
      return { ...state, currentBoardId: action.boardId }
    case ADD_BOARD:
      return { ...state, boards: [...state.boards, { id: Date.now(), name: action.name, date: getCreatedDate(), color: action.color, notes: [] }] }
    case REMOVE_BOARD:
      return { ...state, boards: state.boards.filter(board => board.id !== action.id) }
    case CHANGE_BOARD:
      return { ...state, boards: [...state.boards.filter(board => board.id !== action.id), { ...state.boards.find(board => board.id === action.id), name: action.name, color: action.color }] }
    default:
      return state
  }
}