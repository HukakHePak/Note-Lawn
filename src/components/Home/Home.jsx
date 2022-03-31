import React, { useState } from 'react'
import '../../styles/home.css'
import FavoriteNoteList from "./FavoriteNoteList";
import SearchBar from './SearchBar'
import BoardList from "./BoardList";
import { AddBoardBar } from './AddBoardBar'

function Home() {
  const [search, setSearch] = useState("");

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

  return (
    <div className="home home__wrapper">
      <div className="home__main">
        <div className="home__main-left left">
          <div className="left__header">
            <AddBoardBar />
            <SearchBar setSearch={setSearch} />
          </div>

          <div className="left__main">
            <BoardList list={BoardsList} search={search} />
          </div>
        </div>

        <div className="home__main-right right">
          <FavoriteNoteList list={FavoriteNotes} />
        </div>
      </div>
    </div>
  );
}

export default Home;