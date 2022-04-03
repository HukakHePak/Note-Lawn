import React, { useState, useEffect } from 'react'
import '../../styles/home.css'
import FavoriteNoteList from "./FavoriteNoteList";
import SearchBar from './SearchBar'
import BoardList from "./BoardList";
import { AddBoardBar } from './AddBoardBar'
import { useSelector } from 'react-redux';

function Home() {
  const [search, setSearch] = useState("");
  const boards = useSelector(state => state.existenceBoards.boards)
  const [boardsList, setBoardsList] = useState(boards)
  const favoritesList = useSelector(state => state.existenceBoards.favorites);
  const mainColor = useSelector(state => state.currentTheme.currentTheme.mainColor)

  // будем брать из state
  const BoardsList = [
    { name: "Late", date: "29/03/22" },
    { name: "Late", date: "29/03/22" },
    { name: "Late", date: "29/03/22" },
    { name: "Late", date: "29/03/22" },
    { name: "Late", date: "29/03/22" },
  ];

  // будем брать из state
  const FavoriteNotes = ["First", "Second", "Thirt"];

  useEffect(() => {
    setBoardsList(
      boards.filter(
        (item) => item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, boards])

  return (
    <div className="home home__wrapper" style={{background: `${mainColor}`}}>
      <div className="home__main">
        <div className="home__main-top">
          <AddBoardBar />
          <SearchBar setSearch={setSearch} />
        </div>
        <BoardList list={boardsList} />
      </div>

      <FavoriteNoteList list={favoritesList} />
    </div>
  );
}

export default Home;
