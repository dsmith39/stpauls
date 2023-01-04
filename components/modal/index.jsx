import React from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";

function Backdrop() {
  return <div className={styles.backdrop}></div>;
}

function Modal({ children }) {
  return (
    <>
      {createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
      {createPortal(
        <aside className={styles.modal}>{children}</aside>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default Modal;
