import styled, { css } from "styled-components";
import { COLORS } from "../../theme";
import MEDIA_QUERY from "../../../constants/styles/media-query";

const SFooter = styled.footer<{ variant?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.2s, color 0.2s;

  ${({ variant }) =>
    variant === "transparentBg" &&
    css`
      background: transparent;

      p {
        color: ${COLORS.primaryDarkColor};

        @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
          color: ${COLORS.primaryLightColor};
          font-size: 10px;
        }
      }
    `}

  p {
    font-size: 16px;
    text-align: center;
  }
`;

export default SFooter;
