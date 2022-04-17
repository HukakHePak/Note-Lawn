import React, { useEffect, useRef } from "react";
import { Board } from "./Board";
import { ToolPanel } from "./ToolPanel";
import { BoardName } from "./BoardName";
import "../../styles/main.css";
import { selectTools } from "./tools/selectTools";
import { useSelector } from "react-redux";
import { getBoardPosition } from "../../store/selectors/board/getBoardPosition";

export function Editor() {
  const editor = useRef();
  const { left, top } = useSelector(getBoardPosition);

  useEffect(() => {
    editor.current.scroll(left, top);
  }, [left, top]);

  return (
    <div ref={editor} className="editor">
      <ToolPanel tools={selectTools()} />
      <ToolPanel tools={selectTools("NOTE_FUNCTIONAL_TOOLS")} right />
      <Board />
      <BoardName />
    </div>
  );
}
