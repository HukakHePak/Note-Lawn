export const SET_MAIN_COLOR = 'SET_MAIN_COLOR'
export const SET_SECOND_COLOR = 'SET_SECOND_COLOR'
export const SET_BACKGROUND = 'SET_BACKGROUND'


export const setMainColor = (main) => ({ type: SET_MAIN_COLOR, main })
export const setSecondColor = (second) => ({ type: SET_SECOND_COLOR, second })
export const setBackgroundData = (background, isRepeat) => ({ type: SET_BACKGROUND, background, isRepeat })
