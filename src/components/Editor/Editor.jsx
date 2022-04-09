import React, { useEffect, useRef } from "react";
import { Board } from "./Board";
import { ToolPanel } from "./ToolPanel";
import { BoardName } from "./BoardName";
import "../../styles/main.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { addNotesTools } from "./tools/addNotesTools";
import { functionalTools } from "./tools/functionalTools";

export function Editor(props) {
  const b = useRef(null);

  useEffect(() => {
    if(b) {
      //b.current.scrollLeft="2000";
      b.current.scroll(5000, 5000)
    }
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        ref={b}
        className="editor"
        style={{
          display: props.active ? "flex" : "none",
        }}
        
      >
        <ToolPanel tools={addNotesTools} />
        <ToolPanel right tools={functionalTools} />
        <Board />
        <BoardName />
      </div>
    </DndProvider>
  );
}
