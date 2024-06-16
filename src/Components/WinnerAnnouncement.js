import React, { useState } from "react";
import Modal from "react-modal";
import "./winnerAnnouncement.css";

function WinnerAnnouncement() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        view
      </button>
      <Modal
        isOpen={visible}
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
      >
        <h2>Winner Announcement</h2>
        <p>Congratulations! You are the winner!</p>
        <button
          onClick={() => {
            setVisible(false);
          }}
        >
          close
        </button>
      </Modal>
    </div>
  );
}

export default WinnerAnnouncement;
