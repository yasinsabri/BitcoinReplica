import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src="asset/play-btn.svg" onClick={handleShow} width="5%" />

      <Modal show={show} onHide={handleClose} animation={false}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BISJi_mMi7U?si=1_SIOpNdtlOpaIwa"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Modal>
    </>
  );
}

export default Example;
