import styled, { css } from "styled-components";

import { NO_PRINT } from "../../../shared/constants/styles/print";
import { SmallerParagraph } from "../../../shared/ui/typography";
import Input from "../../../shared/ui/input";
import ErrorMessage from "../../../shared/ui/error-message";
import MEDIA_QUERY from "../../../shared/constants/styles/media-query";

export const ToDoItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1px 0;

  ${SmallerParagraph} {
    padding: 4px 0;
  }
`;

export const ItemButtonContainer = styled.div<{ isHidden: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  opacity: 0;
  ${NO_PRINT}
  margin-left: 8px;
  transition: opacity 0.2s ease-in-out;

  ${({ isHidden }) =>
    isHidden &&
    css`
      display: none;
    `}
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  :hover {
    ${ItemButtonContainer} {
      opacity: 1;
    }
  }
`;

export const EditForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
`;

export const EditInput = styled(Input)`
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  font-size: 26px;
  font-weight: 400;

  @media ${MEDIA_QUERY.laptop} {
    font-size: 22px;
  }

  @media ${MEDIA_QUERY.tablet} {
    font-size: 18px;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 16px;
  }
`;

export const EditErrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: -4px;
  right: 0;
  font-size: 18px;

  @media ${MEDIA_QUERY.tablet} {
    font-size: 16px;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 16px;
  }
`;
