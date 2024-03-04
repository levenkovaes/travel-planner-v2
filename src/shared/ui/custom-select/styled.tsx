import styled, { css } from "styled-components";

import MEDIA_QUERY from "../../constants/styles/media-query";
import { SmallerParagraph } from "../typography";

export const SelectWrapper = styled.div`
  position: relative;
  margin: 7px 0;
`;

export const Select = styled.div<{ isOpen?: boolean }>`
  padding: 10px 40px 10px 20px;
  border: 2px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 6px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.input.text};
  font-size: 26px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  }

  @media ${MEDIA_QUERY.tablet} {
    font-size: 20px;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 18px;
  }
`;

export const IconContainer = styled.div<{ isOpen?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  height: 40px;
  width: 40px;
  transition: transform 0.3s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateY(-50%) rotate(-180deg);
    `}

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    height: 30px;
    width: 30px;
  }

  svg {
    @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
      height: 30px;
      width: 30px;
    }
  }

  path {
    fill: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const DropdownContainer = styled.ul`
  position: absolute;
  left: 0;
  top: 54px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 2;

  @media ${MEDIA_QUERY.laptop} {
    top: 50px;
  }

  @media ${MEDIA_QUERY.tablet} {
    top: 48px;
  }

  @media ${MEDIA_QUERY.mobile} {
    top: 46px;
  }
`;

export const Option = styled(SmallerParagraph)<{ isSelected?: boolean }>`
  padding: 10px 20px;
  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${({ theme }) => theme.colors.card};
    `}
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  transition: background-color 0.3s ease-in-out;

  &:first-child {
    border-radius: 6px 6px 0 0;
  }

  &:last-child {
    box-shadow: none;
    border-radius: 0 0 6px 6px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }
`;
