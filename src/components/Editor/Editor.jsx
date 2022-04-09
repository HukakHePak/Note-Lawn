import React, { useEffect, useRef, useState } from "react";
import { Board } from "./Board";
import { ToolPanel } from "./ToolPanel";
import { BoardName } from "./BoardName";
import "../../styles/main.css";
import { selectTools } from "./tools/selectTools";

export function Editor(props) {

  return (
    <div
      className="editor"
      style={{
        display: props.active ? "flex" : "none",
      }}
    >
      <ToolPanel tools={selectTools()} />
      <ToolPanel right tools={selectTools(false)} />
      <Board />
      <BoardName />
    </div>
  );
}
