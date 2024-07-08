import styled, { css } from "styled-components";

import MEDIA_QUERY from "../../../constants/styles/media-query";
import { NO_PRINT } from "../../../constants/styles/print";
import { IconButton } from "../../button";
import { COLORS } from "../../theme";

const SHeader = styled.header<{ variant?: string }>`
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  ${NO_PRINT}

  ${({ variant }) =>
    variant === "transparentBg" &&
    css`
      background: transparent;

      button:first-child {
        path {
          fill: ${COLORS.primaryDarkColor};
        }
      }
    `}

  @media ${MEDIA_QUERY.laptop} {
    padding: 16px 40px;
  }

  @media ${MEDIA_QUERY.tablet} {
    padding: 16px 30px;
  }

  @media ${MEDIA_QUERY.mobile} {
    padding: 10px 20px;
  }
`;

export const LogoButton = styled(IconButton)`
  background: transparent;

  &:hover,
  &:active {
    background: transparent;

    path {
      transition: fill 0.2s ease-in-out;
      fill: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;

export default SHeader;
