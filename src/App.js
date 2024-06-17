import React from "react";
import "./assets/styles/Home.css";
import Navbar from "./Components/Navbar";
import GameBoard from "./Components/GameBoard";
import WinnerAnnouncement from "./Components/WinnerAnnouncement";
import Home from "./Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
