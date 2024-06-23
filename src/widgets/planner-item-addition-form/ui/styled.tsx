import styled from "styled-components";

import MEDIA_QUERY from "../../../shared/constants/styles/media-query";
import { Button } from "../../../shared/ui/button";
import { CloseButton } from "../../../shared/ui/modal/styled";

export const FormBackdrop = styled.div`
  display: none;

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(10px) brightness(80%);
  }
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 60px;
  right: -10px;
  margin: 20px 0 36px;
  padding: 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 376px;

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    padding: 20px;
    margin: 0;
    top: 50dvh;
    transform: translateY(-50%);
    right: unset;
    z-index: 10;
  }

  @media ${MEDIA_QUERY.mobile} {
    width: 100dvw;
    height: 100dvh;

    border-radius: 0;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;

  textarea {
    max-width: 500px;
    min-height: 200px;
    max-height: 500px;
  }

  ${Button} {
    align-self: center;
    margin-top: 12px;
  }
`;

export const FormCloseButton = styled(CloseButton)`
  position: absolute;
  top: -10px;
  right: -20px;

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    top: 0;
    right: -10px;
  }
`;
