import React from "react";
import { Board } from "./Board";
import { ToolPanel } from "./ToolPanel";
import { BoardName } from "./BoardName";
import { LoadingLinkModal } from "./LoadingLinkModal";
import "../../styles/main.css";
import { createNotesTools } from "../../tools/createNotesTools";
import { toolsForTextNote } from "./toolsForTextNote";
import { functionalTools } from "../../tools/functionalTools";

export function Editor(props) {
  return (
    <div
      className="main-board"
      style={{
        display: props.active ? "flex" : "none",
      }}
    >
      <ToolPanel tools={toolsForTextNote} />
      <ToolPanel right tools={functionalTools} />
      <Board notes />
      <BoardName />
      {/* <LoadingLinkModal /> */}
    </div>
  );
}
