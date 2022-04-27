import { ReactComponent as HomeSvg } from "../../../img/right-tool/homeIcon.svg";
import { createTool } from "./createTool";
import { selectBoard } from "../../../store/reducers/selectsReducer";
import { getCurrentBoard } from "../../../store/selectors/board/getCurrentBoard";
import { ColorCircle } from "../../Global/ColorCircle";
import { editBoard } from "../../../store/reducers/boardsReducer";
import { getModals } from "../../../store/selectors/selects/getModals";
import { openModal } from "../../../store/reducers/selectsReducer";

export const functionalTools = [
  ["Домой", <HomeSvg />, () => selectBoard(null)],
  [
    "Выбрать цвет борда",
    null,
    null,
    (dispatch, state) => {
      const { id, theme } = getCurrentBoard(state);

      const { color, link, isRepeat } = theme;

      return (
        <ColorCircle
          defaults={{ color, link, isRepeat }}
          onChange={(theme) => {
            dispatch(editBoard({id, theme }));
          }}
          active={!!getModals(state).boardColor}
          onClick={(visible) => {
            dispatch(openModal({ boardColor: visible }));
          }}
          hasLink
        />
      );
    },
  ],
].map(createTool);
