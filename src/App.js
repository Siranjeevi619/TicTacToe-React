import React from "react";
import "./assets/styles/Home.css";
import Navbar from "./Components/Navbar";
import GameBoard from "./Components/GameBoard";
import WinnerAnnouncement from "./Components/WinnerAnnouncement";

function App() {
  return (
    <>
      <Navbar />
      <GameBoard />
      {/* <WinnerAnnouncement /> */}
    </>
  );
}

export default App;
