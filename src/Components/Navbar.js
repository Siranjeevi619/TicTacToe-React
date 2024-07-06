import React, { useEffect } from "react";
import "./styles/Navbar.css";
import "./styles/styles.css";
import catHeaderIcon from "../assets/icons/cat.png";
import dogHeaderIcon from "../assets/icons/shiba-inu.png";

function Navbar() {
  useEffect(() => {
    document.title = "Tic Tac Toe";
  }, []);
  return (
    <>
      <nav className="navbar  bg-light justify-content-center">
        <img src={catHeaderIcon} className="img-fluid navbar-brand" />

        <a href="#" className="navbar-brand nav-color fw-bold">
          <div className="d-inline">
            <h4 className="h1 fw-bolder">Tic Tac Toe</h4>
          </div>
        </a>
        <img src={dogHeaderIcon} className="img-fluid navbar-brand" />
      </nav>
    </>
  );
}

export default Navbar;
