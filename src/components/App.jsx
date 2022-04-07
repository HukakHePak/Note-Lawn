import React from "react";
import Home from "./Home/Home";
import { Editor } from "./Editor/Editor";
import "../styles/index.css";
import { useSelector } from "react-redux";

function App() {
  const { home, editor } = useSelector(state=>state.openedWindow);

  return (
    <div className="app">
      <Home active={home}/>
      <Editor active={editor}/>
    </div>
  );
}

export default App;
