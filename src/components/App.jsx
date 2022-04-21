import React, { useState } from "react";
import "../styles/index.css";
import Home from "./Home/Home";
import { Editor } from "./Editor/Editor";
import { useSelector } from "react-redux";
import { getCurrentBoardId } from "./../store/selectors/existenceBoards";

function App() {
  const boardId = useSelector(getCurrentBoardId);

  return <div className="app">{boardId ? <Editor /> : <Home />}</div>;
}

export default App;
