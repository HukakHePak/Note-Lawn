import React, { useState } from "react";
import "../styles/index.css";
import Home from "./Home/Home";
import { Editor } from "./Editor/Editor";
import { useSelector } from "react-redux";
import { getCurrentBoardId } from './../store/selectors/existenceBoards';
import { OpenModalConfirmRemoveBoard } from "./Home/Modal";

function App() {
  const boardId = useSelector(getCurrentBoardId);
  const [modalActive, setModalActive] = useState(false);
  const [idRemoveBoard, setIdRemoveBoard] = useState();

  function handleRemoveConfirm(id) {
    setModalActive(true);
    setIdRemoveBoard(id);
  }

  return (
    <div className="app">
      {boardId ? (
        <Editor />
      ) : (
        <Home handleRemoveConfirm={handleRemoveConfirm} />
      )}
      <OpenModalConfirmRemoveBoard
        active={modalActive}
        setActive={setModalActive}
        id={idRemoveBoard}
      />
    </div>
  );
};

export default App;
