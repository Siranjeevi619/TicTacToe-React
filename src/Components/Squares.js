import React from "react";
import "./square.css";

function Squares(props) {
  return (
    <button className="cell" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Squares;
