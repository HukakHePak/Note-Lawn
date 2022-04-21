import React, { useState } from "react";
import { SmallModal } from "../Global/SmallModal";
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "../../store/selectors/existenceBoards";
import { changeBoard } from "../../store/actions/board/changeBoard";

export function BoardName({ boardId }) {
  const [hiddenModal, setHiddenModal] = useState(false);
  const styleClasses = ["board-name__modal"];
  const dispatch = useDispatch();
  const board = useSelector((state) => getBoard(state, boardId));
  const { img: defaultBackground, isRepeat: defaultIdRepeat } = board.theme.link;

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
          action={(...args) => dispatch(changeBoard(boardId, ...args))}
          defaultColor={board.theme.color}
          defaultBackground={defaultBackground}
          defaultIdRepeat={defaultIdRepeat}
          styleClasses={styleClasses}
          placeholderText="New board name"
          buttonText="Change"
        />
      )}
    </div>
  );
}
