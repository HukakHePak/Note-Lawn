import React, { useState } from "react";
import { ReactComponent as AddBoardSvg } from "../../img/addBoardBtn.svg";
import { SmallModal } from "../Global/SmallModal";
import { useDispatch } from "react-redux";
import { addBoard } from "../../store/actions/board/addBoard";
import fontColorContrast from "font-color-contrast";

export function AddBoardBar({ theme }) {
  const [hiddenModal, setHiddenModal] = useState(false);
  const styleClasses = ["new-board-modal"];
  const dispatch = useDispatch();
  const color = fontColorContrast(theme.mainColor);

  return (
    <div className="home__main-btn" style={{ color }}>
      Boards
      <AddBoardSvg fill={color} onClick={() => setHiddenModal(!hiddenModal)} />
      {hiddenModal && (
        <SmallModal
          hiddenModal={() => setHiddenModal(false)}
          action={(...args) => dispatch(addBoard(...args))}
          styleClasses={styleClasses}
          placeholderText="Name..."
          buttonText="Create"
        />
      )}
    </div>
  );
}
