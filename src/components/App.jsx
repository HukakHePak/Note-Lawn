import React from "react";
import Home from "./Home/Home";
import { Editor } from "./Editor/Editor";
import "../styles/index.css";
import { useSelector } from "react-redux";
import { getCurrentBoardId, getBoard } from './../store/selectors/existenceBoards';
import { getAppTheme } from './../store/selectors/appTheme';


function App() {
  const boardId = useSelector(getCurrentBoardId);
  const background = useSelector(boardId ? state => getBoard(state, boardId) : getAppTheme)[boardId ? 'color' : 'mainColor']

  return (
    <div className="app" style={{ background }}>
      {boardId
        ? <Editor boardId={boardId} />
        : <Home />}
    </div>
  );
}

export default App;
