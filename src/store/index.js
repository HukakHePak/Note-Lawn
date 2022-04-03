import { createStore, combineReducers } from 'redux'
import { existenceBoardsReducer } from './reducers/existenceBoardsReducer';
import { currentThemeReducer } from './reducers/currentThemeReducer';

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
  existenceBoards: existenceBoardsReducer,
  currentTheme: currentThemeReducer,
})


export const store = createStore(rootReducer)
