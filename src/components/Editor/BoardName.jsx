import React, { useState } from "react";
import { SmallModal } from "../Global/SmallModal";
import { useDispatch } from "react-redux";
import fontColorContrast from "font-color-contrast";
import { editBoard } from "../../store/actions/board/editBoard";

const filler = {
  styleClass: "board-name__modal",
  inputPlaceholder: "New board name",
  buttonText: "Change",
};

export function BoardName(props) {
  const { id, name, theme } = props.board;

  const [hiddenModal, setHiddenModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      className="board-name"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <button
        className="board-name__btn"
        onClick={(event) => {
          setHiddenModal(!hiddenModal);
          event.stopPropagation();
        }}
        style={{ color: fontColorContrast(theme.color) }}
      >
        {name}
      </button>
      {hiddenModal && (
        <SmallModal
          hiddenModal={() => setHiddenModal(false)}
          action={(value) => dispatch(editBoard(id, { name: value }))}
          filler={filler}
          defaults={{ ...theme, name }}
        />
      )}
    </div>
  );
}
