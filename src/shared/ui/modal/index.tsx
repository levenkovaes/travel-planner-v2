import React, { MouseEventHandler } from "react";

import useClickOutside from "../../hooks/useClickOutside";
import CloseIcon from "./assets/close_40.svg";
import { CloseButton, ModalContainer, ModalWindow } from "./styled";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({ children, handleClose }) => {
  // TODO
  // const clickRef = React.useRef<HTMLDivElement | null>(null);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  // useClickOutside(clickRef, handleClose);

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
