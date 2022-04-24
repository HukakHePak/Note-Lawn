import React, { useState } from "react";
import { SmallModal } from "../Global/SmallModal";
import { useDispatch, useSelector } from "react-redux";
import fontColorContrast from "font-color-contrast";
import { editBoard } from "../../store/actions/board/editBoard";
import { getAppTheme } from "../../store/selectors/appTheme";
import { getCurrentBoard } from "../../store/selectors/board/getCurrentBoard";

const filler = {
  styleClass: 'board-name__modal',
  inputPlaceholder: 'New board name',
  buttonText: 'Change'
}

export function BoardName() {
  const {id, name, theme} = useSelector(getCurrentBoard);
  const { color } = theme;
  const appTheme = useSelector(getAppTheme);

  const [hiddenModal, setHiddenModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="board-name">
      <button
        className="board-name__btn"
        onClick={() => setHiddenModal(!hiddenModal)}
        style={{color: fontColorContrast(color)}}
      >
        {name}
      </button>
      {hiddenModal && (
        <SmallModal
          hiddenModal={() => setHiddenModal(false)}
          action={(value) => dispatch(editBoard(id, {name: value}))}
          filler={filler}
          defaults={{...theme, name}}
          theme={appTheme}
        />
      )}
    </div>
  );
}
