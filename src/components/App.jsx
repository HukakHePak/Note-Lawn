import React from "react";
import useColor from './../hooks/useColor.js';
import "../styles/index.css";
import Home from "./Home/Home";
import { Editor } from "./Editor/Editor";
import { useSelector } from "react-redux";
import { getCurrentBoardId } from './../store/selectors/existenceBoards';


function App() {
  const boardId = useSelector(getCurrentBoardId);
  const styles = useColor(boardId);

  return (
    <div className="app" style={styles}>
      {boardId
        ? <Editor boardId={boardId} />
        : <Home />}
    </div>
  );
};

export default App;
