import { ReactComponent as HomeSvg } from "../../../img/right-tool/homeIcon.svg";
import { createOptionTool, createTool } from "./createTool";
import { selectBoard } from "../../../store/actions/board/selectBoard";
import { getCurrentBoard } from "../../../store/selectors/board/getCurrentBoard";
import { ColorCircle } from "../../Global/ColorCircle";
import { editBoard } from "../../../store/actions/board/editBoard";
import { openModal } from "../../../store/actions/openModal";

const home = createTool(["Домой", <HomeSvg />, () => selectBoard(null)]);

const color = createOptionTool(["Выбрать цвет фона", (dispatch, state) => {
  const { id, theme } = getCurrentBoard(state);
  const { color, link, isRepeat } = theme;

  return (
    <ColorCircle
      defaults={{ color, link, isRepeat }}
      onChange={(theme) => {
        dispatch(editBoard(id, { theme }));
      }}
      active={!!state.selects.modals.boardColor}
      onClick={(visible) => {
        dispatch(openModal({ boardColor: visible }));
      }}
      hasLink
    />
  );
}]);

export const functionalTools = [home, color];
