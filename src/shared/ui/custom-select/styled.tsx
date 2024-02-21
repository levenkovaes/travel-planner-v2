import styled, { css } from "styled-components";

import MEDIA_QUERY from "../../constants/styles/media-query";
import { SmallerParagraph } from "../typography";

export const SelectWrapper = styled.div`
  position: relative;
`;

export const Select = styled.div<{ isOpen?: boolean }>`
  padding: 10px 20px;
  margin: 6px 0 20px;
  border: 2px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 6px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.input.text};
  font-size: 26px;
  font-weight: 400;
  transition: all 0.2s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      border-color: ${({ theme }) => theme.colors.accentColor};
    `}

  ::placeholder {
    color: ${({ theme }) => theme.colors.input.placeholder};
  }

  @media ${MEDIA_QUERY.laptop} {
    font-size: 22px;
    margin: 4px 0 20px;
  }

  @media ${MEDIA_QUERY.tablet} {
    font-size: 20px;
    margin: 2px 0 20px;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 18px;
    margin: 0 0 20px;
  }
`;

export const DropdownContainer = styled.ul`
  position: absolute;
  left: 0;
  top: 62px;
  width: 100%;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 2;

  @media ${MEDIA_QUERY.laptop} {
    top: 56px;
  }

  @media ${MEDIA_QUERY.tablet} {
    top: 51px;
  }

  @media ${MEDIA_QUERY.mobile} {
    top: 46px;
  }
`;

export const Option = styled(SmallerParagraph)<{ isSelected?: boolean }>`
  padding: 8px 20px;
  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${({ theme }) => theme.colors.card};
    `}
  transition: background-color .3s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }
`;
