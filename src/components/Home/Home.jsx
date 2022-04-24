import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../styles/home.css";
import SearchBar from "./SearchBar";
import { BoardList } from "./BoardList";
import { AddBoardBar } from "./AddBoardBar";
import {
  getBoadrds,
} from "../../store/selectors/existenceBoards";
import { getAppTheme } from "./../../store/selectors/appTheme";
import Settings from "./settings/Settings";
import { OpenModalConfirmRemoveBoard } from "./OpenModalConfirmRemoveBoard";

function Home() {
  const [search, setSearch] = useState("");
  const boards = useSelector(getBoadrds);
  const [boardsList, setBoardsList] = useState(boards);
  const theme = useSelector(getAppTheme);
  const [modalActive, setModalActive] = useState(false);
  const [idRemoveBoard, setIdRemoveBoard] = useState();

  function handleRemoveConfirm(id) {
    setModalActive(true);
    setIdRemoveBoard(id);
  }

  useEffect(() => {
    setBoardsList(
      boards.filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, boards]);

  return (
    <div
      className="home"
      style={{
        background: theme.main,
      }}
    >
      <div className="home__wrapper">
        <div className="home__top">
          <div className="home__top-search">
            <AddBoardBar theme={theme} />
            <SearchBar setSearch={setSearch} theme={theme} />
          </div>
          <Settings theme={theme} />
        </div>
        <BoardList
          list={boardsList}
          theme={theme}
          handleRemoveConfirm={handleRemoveConfirm}
        />
      </div>
      <OpenModalConfirmRemoveBoard
        active={modalActive}
        setActive={setModalActive}
        id={idRemoveBoard}
        background={theme.second}
        handleRemoveConfirm={handleRemoveConfirm}
      />
    </div>
  );
}

export default Home;
