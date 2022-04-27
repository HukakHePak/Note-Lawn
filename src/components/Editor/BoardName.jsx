import React from "react";
import { SmallModal } from "../Global/SmallModal";
import { useDispatch, useSelector } from "react-redux";
import fontColorContrast from "font-color-contrast";
import { editBoard } from "../../store/reducers/boardsReducer";
import { getModals } from "../../store/selectors/selects/getModals";
import { openModal, closeModals } from "../../store/reducers/selectsReducer";
import { getBoard } from './../../store/selectors/existenceBoards';


const filler = {
  styleClass: "board-name__modal",
  inputPlaceholder: "New board name",
  buttonText: "Change",
};

export function BoardName(props) {
  const { id, name } = props.board;
  const theme = useSelector(getBoard(id))?.theme?.color;
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
          event.stopPropagation();
          dispatch(openModal({[id]: !active}));
        }}
        style={{ color: fontColorContrast(theme) }}
      >
        {name}
      </button>
      {active && (
        <SmallModal
          onSubmit={(name) => {
            dispatch(editBoard({id, name}));
            dispatch(closeModals());
          }}
          filler={filler}
          defaults={{ name }}
        />
      )}
    </div>
  );
}
