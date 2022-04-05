import React, { useState } from "react";
import { SmallModal } from "../Global/SmallModal";

export function BoardName() {
  const [hiddenModal, setHiddenModal] = useState(false);
  const styleClasses = ["board-name__modal"];

  return (
    <div className="board-name">
      <button
        className="board-name__btn"
        onClick={() => setHiddenModal(!hiddenModal)}
      >
        board_name
      </button>
      <SmallModal
        hiddenModal={hiddenModal}
        styleClasses={styleClasses}
        placeholderText="new board name"
        buttonText="Rename"
      />
    </div>
  );
}
