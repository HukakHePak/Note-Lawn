import React, { useState } from "react";
import addBoardBtn from "../../img/addBoardBtn.svg";
import { SmallModal } from "../Global/SmallModal"
import { useDispatch } from 'react-redux';
import { addBoard } from "../../store/actions/board/addBoard";

const filler = {
  styleClass: 'new-board-modal',
  inputPlaceholder: 'Name...',
  buttonText: 'Create'
}

export function AddBoardBar({background}) {
  const [hiddenModal, setHiddenModal] = useState(false);
  const dispatch = useDispatch()

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
        action={(...args) => dispatch(addBoard(...args))}
        filler={filler}
      />}
    </div>
  );
}
