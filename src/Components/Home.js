import React from "react";
import GameBoard from "./GameBoard";

function Home() {
  return (
    <div>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-2 col"></div>
          <div className="col-lg-4 ms-lg-0 ms-md-5 ms-4 col-md-8 col-10">
            <GameBoard />
          </div>
          <div className="col-lg-4 col-md-2 col"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
