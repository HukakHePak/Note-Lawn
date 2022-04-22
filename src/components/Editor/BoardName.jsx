import React, { useState } from "react";
import { SmallModal } from "../Global/SmallModal";
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "../../store/selectors/existenceBoards";
import { editBoard } from "../../store/actions/board/editBoard";

const filler = {
  styleClass: 'board-name__modal',
  inputPlaceholder: 'New board name',
  buttonText: 'Change'
}

export function BoardName({ boardId }) {
  const board = useSelector((state) => getBoard(state, boardId));
  const [hiddenModal, setHiddenModal] = useState(false);
  const defaults = {
    name: board.name,
    color: board.theme.color,
    link: board.theme.link,
    isRepeat: board.theme.isRepeat,
  }
  const dispatch = useDispatch();

  return (
    <div className="board-name">
      <button
        className="board-name__btn"
        onClick={() => setHiddenModal(!hiddenModal)}
      >
        {board.name}
      </button>
      {hiddenModal && (
        <SmallModal
          hiddenModal={() => setHiddenModal(false)}
          action={(...args) => dispatch(editBoard(boardId, ...args))}
          filler={filler}
          defaults={defaults}
        />
      )}
    </div>
  );
}
