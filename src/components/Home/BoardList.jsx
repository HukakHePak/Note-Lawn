import React from "react";

function BoardList(props) {
  const { list, search } = props;

  const boardsList = list;

  // Для чего это? При кликле на поиск мы будем открывать соответствующий борд. Надо продумать.
  /* if (search) {
    arrayBoards = arrayBoards.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  } */

  return (
    <div className="home__pages">

    
      {boardsList.map((item, index) => (
        <BoardItem
          key = { index }
          boardTitle = {item.name}
          boardDate = {item.date}
          // onClick =
        />
      ))}
    </div>
  );
}

function BoardItem (props) {
  const {boardDate, boardTitle} = props;

  return (
    <a className="home__pages-item" href="#pageId">
      <h3 className="home__pages-title">{boardTitle}</h3>
      <span className="home__pages-date">{boardDate}</span>
    </a>
  );
}

export default BoardList
