import { defaultState } from "../store.js";
import { ACTIONS } from '../actions/index';

export const currentTheme = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_CURRENT_THEME:
      return { ...state, currentTheme: { mainColor: action.mainColor, secondColor: action.secondColor } }
    default:
      return state
  }
}