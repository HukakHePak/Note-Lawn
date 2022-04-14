import React, { useEffect, useRef } from "react";
import { Board } from "./Board";
import { ToolPanel } from "./ToolPanel";
import { BoardName } from "./BoardName";
import "../../styles/main.css";
import { selectTools } from "./tools/selectTools";
import { useDispatch, useSelector } from "react-redux";
import { changeBoard } from "../../store/actions/board/changeBoard";
import { changeScrollPos } from "../../store/actions/board/changeScrollPos";
import { getBoardPosition } from "../../store/selectors/board/getBoardPosition";

export function Editor(props) {
  const { boardId } = props;
  const editor = useRef();
  const dispatch = useDispatch();
  const { left, top } = useSelector(getBoardPosition);
  
  useEffect(() => { if(editor.current.scrollTop == 0 && editor.current.scrollLeft == 0) { editor.current.scroll(left, top) } }, [left, top]);

  return (
    <div
      ref={editor}
      className="editor"
      onScroll={({target}) =>
        dispatch(changeScrollPos(boardId, { top: target.scrollTop, left: target.scrollLeft }))
      }
    >
      <ToolPanel tools={selectTools()} />
      <ToolPanel right tools={selectTools(false)} />
      <Board />
      <BoardName boardId={boardId} />
    </div>
  );
}
