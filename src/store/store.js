import { configureStore } from '@reduxjs/toolkit'
import appTheme from "./reducers/appTheme";
import notes from "./reducers/notesReducer";
import selects from "./reducers/selectsReducer";
import boards from "./reducers/boardsReducer";
import { savingStore } from './Middlewares/savingStore';


export const store = configureStore({
  reducer: {
    notes,
    boards,
    appTheme,
    selects
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(savingStore)
});
