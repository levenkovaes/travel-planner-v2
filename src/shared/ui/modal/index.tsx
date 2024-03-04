import React from "react";

import CloseIcon from "./assets/close_40.svg";
import { CloseButton, ModalBackground, ModalWindow } from "./styled";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({ children, handleClose }) => {
  return (
    <>
      <ModalBackground onClick={handleClose}></ModalBackground>

      <ModalWindow>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
        {children}
      </ModalWindow>
    </>
  );
};
export default Modal;
