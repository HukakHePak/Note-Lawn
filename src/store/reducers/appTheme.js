import { SET_BACKGROUND, SET_CURRENT_THEME } from "../actions/appTheme"


const defaultState = {
  appTheme: { mainColor: '#F4E6DC', secondColor: '#FCF5F0' },
  background: {img: '', isRepeat: false}
}

export const appTheme = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_THEME:
      return { ...state, appTheme: { mainColor: action.mainColor, secondColor: action.secondColor } }
    case SET_BACKGROUND:
      return { ...state, background: {img: action.background, isRepeat: action.isRepeat} }
    default:
      return state
  }
}
