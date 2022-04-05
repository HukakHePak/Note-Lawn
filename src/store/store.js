import { createStore, combineReducers } from 'redux'
import { existenceBoards } from './reducers/existenceBoards';
import { currentTheme } from './reducers/currentTheme';
import { openedWindow } from './reducers/openedWindow';

export const defaultState = {
  currentBoardId: null,
  currentNoteId: null,
  currentTheme: { mainColor: '#F4E6DC', secondColor: '#D8B499' },
  themes: [],
  boards: [
    { name: "Late", date: "29/03/22" },
    { name: "Late", date: "29/03/22" },
    { name: "Late", date: "29/03/22" },
    { name: "Late", date: "29/03/22" },
    { name: "Late", date: "29/03/22" }],
  favorites: ["First", "Second", "Thirt"],
}

const rootReducer = combineReducers({
  existenceBoards,
  currentTheme,
  openedWindow
})


export const store = createStore(rootReducer)
