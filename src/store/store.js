import { createStore, combineReducers, compose } from 'redux'
import { existenceBoards } from './reducers/existenceBoards';
import { appTheme } from './reducers/appTheme';
import { notesReducer } from './reducers/notesReducer';


const rootReducer = combineReducers({
  existenceBoards, 
  notes: notesReducer,
  appTheme
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers())
