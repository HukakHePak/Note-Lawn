import React, { useState } from "react";

import addBoardBtn from "../../img/addBoardBtn.svg";
import { SmallModal } from "./SmallModal";

export function AddBoardBar() {
  const [hiddenModal, setHiddenModal] = useState(false);
  const styleClasses = ['new-board-modal']

  return (
    <div className="home__main-btn--wrapper">
      <button
        className="home__main-btn"
        onClick={() => setHiddenModal(!hiddenModal)}
      >
        Boards
        <img src={addBoardBtn} alt="Add Board" />
      </button>
      <SmallModal
        colorPallet
        hiddenModal={hiddenModal}
        styleClasses={styleClasses}
        placeholderText="Name..."
        buttonText="Create"
      />
    </div>
  );
}
