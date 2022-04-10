import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { getAppBackgound, getAppTheme } from './../store/selectors/appTheme';
import { getBoard } from './../store/selectors/existenceBoards';


function useColor(boardId) {
  const theme = useSelector(boardId ? state => getBoard(state, boardId) : getAppTheme)
  const bg = useSelector(getAppBackgound)

  const styles = useMemo(() => {
    let styles
    if (boardId) {
      const { color, bg } = theme.theme
      if (bg.img) {
        styles = bg.isRepeat
          ? { background: `url(${bg.img}) repeat` }
          : { background: `url(${bg.img}) center / cover no-repeat` }
      } else {

        styles = { background: color }
      }
    } else {
      if (bg.img) {
        styles = bg.isRepeat
          ? { background: `url(${bg.img}) repeat` }
          : { background: `url(${bg.img}) center / cover no-repeat` }
      } else {
        styles = { background: theme.mainColor }
      }
    }
    return styles
  }, [boardId, theme, bg])
  return styles
}

export default useColor