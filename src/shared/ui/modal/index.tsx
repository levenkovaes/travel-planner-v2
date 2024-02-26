import React, { MouseEventHandler } from "react";

import CloseIcon from "./assets/close_40.svg";
import { CloseButton, ModalContainer, ModalWindow } from "./styled";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({ children, handleClose }) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalContainer onClick={handleClose}>
      <ModalWindow onClick={handleClick}>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
        {children}
      </ModalWindow>
    </ModalContainer>
  );
};
export default Modal;
