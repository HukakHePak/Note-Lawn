import React, { useState } from "react";
import addBoardBtn from "../../img/addBoardBtn.svg";
import { SmallModal } from "../Global/SmallModal"
import { useDispatch } from 'react-redux';
import { addBoard } from './../../store/actions/existenceBoards';

export function AddBoardBar({background}) {
  const [hiddenModal, setHiddenModal] = useState(false);
  const styleClasses = ['new-board-modal']
  const dispatch = useDispatch()

  function action(value, boardColor, background, isRepeat) {
    if (value) dispatch(addBoard(value, boardColor, background, isRepeat))
  }

  return (
    <div className="home__main-btn--wrapper" style={{background}}>
      <button
        className="home__main-btn"
        onClick={() => setHiddenModal(!hiddenModal)}
      >
        Boards
        <img src={addBoardBtn} alt="Add Board" />
      </button>
      {hiddenModal && <SmallModal
        hiddenModal={() => setHiddenModal(false)}
        action={action}
        styleClasses={styleClasses}
        placeholderText="Name..."
        buttonText="Create"
      />}
    </div>
  );
}
