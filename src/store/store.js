import { createStore, combineReducers, compose } from "redux";
import { appTheme } from "./reducers/appTheme";
import { notesReducer } from "./reducers/notesReducer";
import { selectsReducer } from "./reducers/selectsReducer";
import { boardsReducer } from "./reducers/boardsReducer";

const rootReducer = combineReducers({
  notes: notesReducer,
  boards: boardsReducer,
  appTheme,
  selects: selectsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers());
