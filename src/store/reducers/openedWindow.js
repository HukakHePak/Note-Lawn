import { editor } from "../actions/openWindow/openEditor";
import { home } from "../actions/openWindow/openHome";

export function openedWindow(state = { home: true }, action) {
  const { type } = action;

  switch (type) {
    case home:
      return { home: true };
    case editor:
      return { editor: true };
    
    default:
        break;
  }

  return state;
}
