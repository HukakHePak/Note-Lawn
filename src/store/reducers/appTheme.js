import { CHANGE_CURRENT_THEME } from "../actions/appTheme"


const defaultState = {
  appTheme: { mainColor: '#F4E6DC', secondColor: '#D8B499' }
}

export const appTheme = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_THEME:
      return { ...state, appTheme: { mainColor: action.mainColor, secondColor: action.secondColor } }
    default:
      return state
  }
}
