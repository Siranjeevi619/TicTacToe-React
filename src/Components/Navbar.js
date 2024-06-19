import React, { useEffect } from "react";
import "./styles/Navbar.css";
import "./styles/styles.css";

function Navbar() {
  useEffect(() => {
    document.title = "Tic Tac Toe";
  }, []);
  return (
    <>
      <nav className="navbar  bg-light justify-content-center">
        <a href="/" className="navbar-brand nav-color fw-bold">
          <h4 className="h1 fw-bolder">Tic Tac Toe</h4>
        </a>
      </nav>
    </>
  );
}

export default Navbar;
