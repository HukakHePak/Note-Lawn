import React from "react";
import { SmallModal } from "../Global/SmallModal";
import { useDispatch, useSelector } from "react-redux";
import fontColorContrast from "font-color-contrast";
import { editBoard } from "../../store/actions/board/editBoard";
import { getModals } from "../../store/selectors/selects/getModals";
import { getAppTheme } from "../../store/selectors/appTheme";
import { openModal } from "../../store/actions/modals/openModal";
import { closeModals } from "../../store/actions/modals/closeModals";

const filler = {
  styleClass: "board-name__modal",
  inputPlaceholder: "New board name",
  buttonText: "Change",
};

export function BoardName(props) {
  const { id, name } = props.board;
  const theme = useSelector(getAppTheme);

  const active = useSelector(getModals)[id];
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
          dispatch(openModal({[id]: !active}));
          event.stopPropagation();
        }}
        style={{ color: fontColorContrast(theme.main) }}
      >
        {name}
      </button>
      {active && (
        <SmallModal
          onSubmit={(value) => {
            dispatch(editBoard(id, value));
            dispatch(closeModals());
          }}
          filler={filler}
          defaults={{ name }}
        />
      )}
    </div>
  );
}
