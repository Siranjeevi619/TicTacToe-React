import React from "react";
import "./Navbar/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar  bg-light justify-content-center">
        <a href="#" className="navbar-brand fs-3 nav-color fw-bold">
          Tic Tac Toe
        </a>
        <div className="nav-pills"></div>
      </nav>
    </>
  );
}

export default Navbar;
