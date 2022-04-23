import { SET_BACKGROUND, SET_CURRENT_THEME } from "../actions/appTheme"
import { storage } from "../storage"


const defaultState = {
  appTheme: { mainColor: '#F4E6DC', secondColor: '#FCF5F0' },
  background: {img: '', isRepeat: false}
}

export const appThemeReducer = (state = storage.get('theme') || defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_THEME:
      return { ...state, appTheme: { mainColor: action.mainColor, secondColor: action.secondColor } }
    case SET_BACKGROUND:
      return { ...state, background: {img: action.background, isRepeat: action.isRepeat} }
    default:
      return state
  }
}


export function appTheme(state, payload) {
  const _state = appThemeReducer(state, payload);

  storage.set('theme', _state);
  return _state;
}
