import { defaultState } from "../store.js"
import { ACTIONS } from '../actions/index';


export const existenceBoards = (state=defaultState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_BOARD:
      return {...state, boards: [...state.boards, {id: Date.now(), name: action.name, date: Date.now(), color: action.color, notes: []}]}
    case ACTIONS.REMOVE_BOARD:
      return {...state, boards: state.boards.filter(board => board.id !== action.id)}
    default:
      return state
  }
}