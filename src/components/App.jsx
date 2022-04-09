import React from "react";
import Home from "./Home/Home";
import { Editor } from "./Editor/Editor";
import "../styles/index.css";
import { useSelector } from "react-redux";
import { getCurrentBoardId } from './../store/selectors/existenceBoards';
import useColor from './../hooks/useColor.js';



function App() {
  const boardId = useSelector(getCurrentBoardId);
  const styles = useColor(boardId)

  return (
    <div className="app" style={styles}>
      {boardId
        ? <Editor boardId={boardId} />
        : <Home />}
    </div>
  );
}

export default App;
