import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { appTheme } from "./reducers/appTheme";
import { notesReducer } from "./reducers/notesReducer";
import { selectsReducer } from "./reducers/selectsReducer";
import { boardsReducer } from "./reducers/boardsReducer";

const rootReducer = combineReducers({
  notes: notesReducer,
  boards: boardsReducer,
  appTheme,
  selects: selectsReducer,
  editor: 'add editor state for best moves'
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
