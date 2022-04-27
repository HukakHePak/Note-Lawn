import { ReactComponent as DeleteIcon } from "../../../img/note-icon/note-functional-tools/deleteIcon.svg";
import { ColorCircle } from "../../Global/ColorCircle";
import { createTool } from "./createTool";
import { ReactComponent as HomeSvg } from "../../../img/right-tool/homeIcon.svg";
import { selectBoard, openModal } from "../../../store/reducers/selectsReducer";
import { getSelectedNote } from "../../../store/selectors/note/getSelectedNote";
import { editNote } from "../../../store/reducers/notesReducer";
import { getModals } from "../../../store/selectors/selects/getModals";
import { removeNoteHelper } from "../../../store/actions/note/removeNoteHelper";


export const noteFunctionalTools = [
  ["Home", <HomeSvg />, () => selectBoard(null)],
  [
    "Select Note color",
    null,
    null,
    (dispatch, state) => {
      const { id, theme } = getSelectedNote(state);
      const { color, link, isRepeat } = theme;

      return (
        <ColorCircle
          defaults={{ color, link, isRepeat }}
          onChange={(theme) => {
            dispatch(editNote({ id, theme }));
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
  ["Remove Note", <DeleteIcon />, () => removeNoteHelper()],
].map(createTool);
