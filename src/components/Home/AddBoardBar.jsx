import React, { useState } from "react";
import { ReactComponent as AddBoardSvg } from "../../img/addBoardBtn.svg";
import { SmallModal } from "../Global/SmallModal";
import { useDispatch, useSelector } from "react-redux";
import { addBoard } from "../../store/actions/board/addBoard";
import fontColorContrast from "font-color-contrast";
import { getModals } from "../../store/selectors/selects/getModals";
import { openModal } from "../../store/actions/openModal";
import { closeModals } from "../../store/actions/closeModals";
import { stopPropagation } from "../../tools/stopPropagation";

const filler = {
  styleClass: "new-board-modal",
  inputPlaceholder: "Name...",
  buttonText: "Create",
};

export function AddBoardBar({ theme }) {
  const active = useSelector(getModals).addBoard;
  const dispatch = useDispatch();
  const color = fontColorContrast(theme.main);

  return (
    <div className="home__main-btn" style={{ color }} onClick={stopPropagation}>
      Boards
      <AddBoardSvg
        fill={color}
        onClick={(event) => {
          dispatch(openModal({ addBoard: !active }));
          //event.stopPropagation();
        }}
      />
      {active && (
        <SmallModal
          action={(...args) => dispatch(addBoard(...args))}
          onSubmit={(form) => {
            dispatch(addBoard(form.name));
            dispatch(closeModals());
          }}
          filler={filler}
        />
      )}
    </div>
  );
}
