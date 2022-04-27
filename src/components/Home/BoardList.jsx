import React from "react";
import BoardItem from "./BoardItem";


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
};

export default BoardList;
