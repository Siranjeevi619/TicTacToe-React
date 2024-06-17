import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./winnerAnnouncement.css";

Modal.setAppElement("#root");

function WinnerAnnouncement(props) {
  const [openCard, setOpenCard] = useState(props.visible);

  useEffect(() => {
    setOpenCard(props.visible);
  }, [props.visible]);

  const handleCard = () => {
    setOpenCard(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <Modal
      isOpen={openCard}
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
      onRequestClose={handleCard}
    >
      <h2>Winner Announcement</h2>
      <p>Congratulations! You are the {props.winner}</p>
      <button onClick={handleCard}>Close</button>
    </Modal>
  );
}

export default WinnerAnnouncement;
