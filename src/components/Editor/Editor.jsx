import React from "react";
import { Board } from "./Board";
import { ToolPanel } from "./ToolPanel";
import { BoardName } from "./BoardName";
import { LoadingLinkModal } from "./LoadingLinkModal";
import "../../styles/main.css";
import { createNotesTools } from "../../tools/createNotesTools";
import { functionalTools } from "../../tools/functionalTools";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


export function Editor({boardId}) {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="main-board">
      <ToolPanel tools={createNotesTools} />
      <ToolPanel right tools={functionalTools} />
      <Board />
      <BoardName boardId={boardId}/>
      {/* <LoadingLinkModal /> */}
    </div>
    </DndProvider>
  );
}
