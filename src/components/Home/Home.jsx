import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/home.css";
import SearchBar from "./SearchBar";
import BoardList from "./BoardList";
import AddBoardBar from "./AddBoardBar";
import Settings from "./settings/Settings";
import { getBoards } from "../../store/selectors/existenceBoards";
import { getAppTheme } from "./../../store/selectors/appTheme";
import { OpenModalConfirmRemoveBoard } from "./OpenModalConfirmRemoveBoard";
import Style from "style-it";
import { closeModals } from "../../store/reducers/selectsReducer";


function Home() {
  const [search, setSearch] = useState("");
  const boards = useSelector(getBoards);
  const [boardsList, setBoardsList] = useState(boards);
  const theme = useSelector(getAppTheme);
  const [modalActive, setModalActive] = useState(false);
  const [idRemoveBoard, setIdRemoveBoard] = useState();
  const dispatch = useDispatch();

  function handleRemoveConfirm(id) {
    setModalActive(true);
    setIdRemoveBoard(id);
  }

  function keyDownHandler(event) {
    switch (event.code.toLocaleLowerCase()) {
      case "home":
      case "escape":
        dispatch(closeModals());
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    setBoardsList(
      boards.filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, boards]);

  return (
    <Style>
      {`
        .home::-webkit-scrollbar-thumb {
          background: ${theme.second};
          border: 5px solid ${theme.main};
        }
        .home {
          background: ${theme.main};
        }
        
        `}
      <div
        className="home"
        onClick={() => dispatch(closeModals())}
        onKeyDown={keyDownHandler}
        tabIndex="0"
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
    </Style>
  );
}

export default Home;
