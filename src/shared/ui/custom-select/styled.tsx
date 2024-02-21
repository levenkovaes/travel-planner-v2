import styled, { css } from "styled-components";

import MEDIA_QUERY from "../../constants/styles/media-query";
import { SmallerParagraph } from "../typography";

export const Select = styled.div<{ open?: boolean }>`
  position: relative;
  padding: 10px 20px;
  margin: 6px 0 20px;
  border: 2px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 6px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.input.text};
  font-size: 26px;
  font-weight: 400;
  transition: all 0.2s ease-in-out;

  ${({ open }) =>
    open &&
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
  left: -2px;
  top: 52px;
  width: calc(100% + 4px);
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 2;

  @media ${MEDIA_QUERY.laptop} {
    top: 48px;
  }

  @media ${MEDIA_QUERY.tablet} {
    top: 46px;
  }

  @media ${MEDIA_QUERY.mobile} {
    top: 44px;
  }
`;

export const Option = styled(SmallerParagraph)`
  padding: 8px 20px;

  :hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }
`;
