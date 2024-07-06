import React from "react";
import PropTypes from "prop-types";

function Squares({ value, onClick }) {
  return (
    <button className="cell" onClick={onClick}>
      {value ? <img src={value} alt="Player" /> : null}
    </button>
  );
}

Squares.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Squares;
