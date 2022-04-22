import { ReactComponent as DeleteIcon} from "../../../img/note-icon/note-functional-tools/deleteIcon.svg";
import { ColorCircle } from "../../Global/ColorCircle";
import { createOptionTool, createTool } from "./createTool";
import { ReactComponent as HomeSvg } from "../../../img/right-tool/homeIcon.svg";
import { selectBoard } from "../../../store/actions/board/selectBoard";
import { getSelectedNote } from "../../../store/selectors/note/getSelectedNote";
import { editNote } from "../../../store/actions/note/editNote";
import { openModal } from "../../../store/actions/openModal";
import { removeNote } from "../../../store/actions/note/removeNote";
import { getSelectedNoteId } from "../../../store/selectors/note/getSelectedNoteId";

export const NOTE_FUNCTIONAL_TOOLS = "NOTE_FUNCTIONAL_TOOLS";

const deleteTool = createTool(["Удалить заметку", <DeleteIcon />, () => removeNote()]);

const home = createTool(["Домой", <HomeSvg />, () => selectBoard(null)]);

const color = createOptionTool(["Выбрать цвет фона", (dispatch, state) => {
  const { id, theme } = getSelectedNote(state);
  const { color, link, isRepeat } = theme;

  return (
    <ColorCircle
      defaults={{ color, link, isRepeat }}
      onChange={(theme) => {
        dispatch(editNote(id, { theme }));
      }}
      active={!!state.selects.modals.boardColor}
      onClick={(visible) => {
        dispatch(openModal({ boardColor: visible }));
      }}
      hasLink
    />
  );
}]);

export const noteFunctionalTools = [home, color, deleteTool];
