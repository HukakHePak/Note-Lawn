import React, { useState } from "react";
import { ReactComponent as AddBoardSvg } from "../../img/addBoardBtn.svg";
import { SmallModal } from "../Global/SmallModal";
import { useDispatch } from "react-redux";
import { addBoard } from "../../store/actions/board/addBoard";
import fontColorContrast from "font-color-contrast";

const filler = {
  styleClass: "new-board-modal",
  inputPlaceholder: "Name...",
  buttonText: "Create",
};

export function AddBoardBar({ theme }) {
  const [hiddenModal, setHiddenModal] = useState(false);
  const dispatch = useDispatch();
  const color = fontColorContrast(theme.main);

  return (
    <div className="home__main-btn" style={{ color }}>
      Boards
      <AddBoardSvg fill={color} onClick={() => setHiddenModal(!hiddenModal)} />
      {hiddenModal && (
        <SmallModal
          hiddenModal={() => setHiddenModal(false)}
          action={(...args) => dispatch(addBoard(...args))}
          filler={filler}
          theme={theme}
          hasColor
        />
      )}
    </div>
  );
}
