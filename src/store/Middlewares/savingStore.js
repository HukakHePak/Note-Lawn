import { storage } from "../storage.js";


export const savingStore = (store) => (next) => (action) => {
  const storeData = store.getState();
  storage.set("theme", storeData.appTheme);
  storage.set("boards", storeData.boards);
  storage.set("notes", storeData.notes);
  return next(action);
};
