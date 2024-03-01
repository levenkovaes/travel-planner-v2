import styled from "styled-components";

import MAIN_PADDING from "../../constants/styles/main-padding";
import { Button } from "../button";
import Input from "../input";
import MEDIA_QUERY from "../../constants/styles/media-query";

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${MAIN_PADDING};
  background-color: ${({ theme }) => theme.colors.modal.cover};
`;

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px 32px;
  width: clamp(200px, 100%, 500px);

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.modal.background};
  color: ${({ theme }) => theme.colors.modal.text};
`;

export const CloseButton = styled.button`
  position: relative;
  right: -24px;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  border-radius: 50%;

  svg {
    width: 28px;
    height: 28px;
    transition: fill 0.3s ease-in-out;

    path {
      fill: ${({ theme }) => theme.colors.primaryColor};
    }
  }

  &:hover {
    cursor: pointer;

    path {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const ModalForm = styled.form`
  width: 100%;
`;

export const ModalInput = styled(Input)`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ModalButton = styled(Button)`
  align-self: center;
  margin: 24px auto 0;

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    width: 100%;
  }
`;
