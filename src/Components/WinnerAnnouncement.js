import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./styles/WinnerAnnouncement.css";

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
      {props.winner !== "D" ? (
        <>
          <h2 className="text-center">Winner Announcement</h2>
          <p className="text-center">
            Congratulations! you are the {props.winner}{" "}
          </p>
        </>
      ) : (
        <>
          <h2 className="text-center">Oops</h2>
          <p className="text-center">It is Draw</p>
        </>
      )}
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-primary text-center" onClick={handleCard}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default WinnerAnnouncement;
