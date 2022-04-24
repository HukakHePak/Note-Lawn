import React from "react";
import { useDispatch } from "react-redux";
import { selectBoard } from "../../store/actions/board/selectBoard";
import fontColorContrast from "font-color-contrast";
import { ReactComponent as TrashSvg } from "../../img/trash.svg";
import { BoardName } from "../Editor/BoardName";
import { Board } from "../Editor/Board";

export function BoardList({ list, theme, handleRemoveConfirm }) {
  return (
    <div className="home__pages">
      {list.map((board) => (
        <BoardItem
          key={board.id}
          board={board}
          theme={theme}
          handleRemoveConfirm={handleRemoveConfirm}
        />
      ))}
    </div>
  );
}

function BoardItem({ board, theme, handleRemoveConfirm }) {
  const { date, id } = board;
  const color = fontColorContrast(theme.second);

  const dispatch = useDispatch();

  function onRemoveConfirm(e) {
    e.stopPropagation();
    handleRemoveConfirm(id);
  }

  return (
    <div className="home__pages-item" onClick={() => dispatch(selectBoard(id))}>
      <Board board={board} off /> {/* off controls  */}
      <div className="home__pages-overlay">
        
        <div
        className="home__pages-panel"
        style={{ color, background: theme.second }}
      >
        <div className="home__pages-info">
          <BoardName board={board} />
          <span className="home__pages-date">{date}</span>
        </div>

        <TrashSvg
          className="home__pages-remove"
          fill={color}
          onClick={onRemoveConfirm}
        />
      </div>
      </div>
      
    </div>
  );
}
