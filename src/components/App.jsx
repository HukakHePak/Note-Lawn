import React from "react";
import Home from "./Home/Home";
import { Editor } from "./Editor/Editor";
import "../styles/index.css";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const { home, editor } = useSelector(state=>state.openedWindow);

  return (
    <div className="app">
      <Home active={home}/>

      <DndProvider backend={HTML5Backend}>
        <Editor active={editor}/>
      </DndProvider>
      
    </div>
  );
}

export default App;
